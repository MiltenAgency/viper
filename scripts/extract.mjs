/**
 * extract.mjs — mine the verbatim Framer export for content, assets and tokens.
 *
 * Usage:
 *   node scripts/extract.mjs routes                     # every route in the export
 *   node scripts/extract.mjs text <route>               # cleaned text stream, document order
 *   node scripts/extract.mjs images <route>             # alt -> src map
 *   node scripts/extract.mjs fonts                      # font-family -> local woff2 files
 *   node scripts/extract.mjs colors <route>             # colour frequency table
 *   node scripts/extract.mjs headings <route>           # h1..h6 in order
 *   node scripts/extract.mjs sections <route>           # text stream grouped by <section>
 *   node scripts/extract.mjs raw <route> <needle> [span]# raw HTML window around a needle
 *   node scripts/extract.mjs meta <route>               # title/description/og
 *
 * <route> is relative to the export's app/ dir: "" (home), "about", "blog/some-post".
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const EXPORT = join(import.meta.dirname, "..", "..", "viper-framer", "app");

function listRoutes(dir = EXPORT) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...listRoutes(full));
    else if (entry === "route.ts") out.push(relative(EXPORT, dir).replace(/\\/g, "/"));
  }
  return out.sort();
}

function loadHtml(route) {
  const src = readFileSync(join(EXPORT, route, "route.ts"), "utf8");
  const m = src.match(/const HTML = "([\s\S]*?)";\s*\n/);
  if (!m) throw new Error(`No HTML literal in ${route || "/"}`);
  return JSON.parse('"' + m[1] + '"');
}

/** Strip <style>/<script> bodies so their contents never leak into the text stream. */
function stripCode(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
}

const NOISE =
  /^(framer|unicode-range|font-family|src:|woff2?$)|[{}]|^\s*$|^[.#:@]|^--|^\d+w$|^data:|^https?:/i;

function textStream(html) {
  const out = [];
  let prev = null;
  for (const t of stripCode(html).match(/>[^<>]+</g) ?? []) {
    const s = t.slice(1, -1).replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    if (!s || NOISE.test(s)) continue;
    if (s === prev) continue; // Framer duplicates nodes across breakpoints
    out.push(s);
    prev = s;
  }
  return out;
}

function imageMap(html) {
  const map = {};
  const re = /<img\b[^>]*>/g;
  for (const [tag] of html.matchAll(re)) {
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    const alt = tag.match(/\salt="([^"]*)"/)?.[1] ?? "";
    if (!src?.startsWith("/assets")) continue;
    (map[alt] ??= []).push(src);
  }
  for (const k of Object.keys(map)) map[k] = [...new Set(map[k])];
  return map;
}

function fontMap() {
  const seen = {};
  for (const route of listRoutes()) {
    const html = loadHtml(route);
    for (const [, block] of html.matchAll(/@font-face\s*{([^}]*)}/g)) {
      const family = block.match(/font-family:\s*["']?([^;"']+)/)?.[1]?.trim();
      const file = block.match(/url\(([^)]*\/assets\/fonts\/[^)]+)\)/)?.[1]?.replace(/["']/g, "");
      const weight = block.match(/font-weight:\s*([^;]+)/)?.[1]?.trim();
      const style = block.match(/font-style:\s*([^;]+)/)?.[1]?.trim();
      if (!family || !file) continue;
      const key = `${family}|${weight ?? "400"}|${style ?? "normal"}`;
      (seen[key] ??= new Set()).add(file);
    }
  }
  return Object.fromEntries(Object.entries(seen).map(([k, v]) => [k, [...v]]));
}

/**
 * The export ships a `<style data-framer-font-css>` block whose @font-face
 * rules already point at the local /assets/fonts files. Lift it verbatim,
 * deduped across routes, keeping only the families we actually want.
 */
function fontCss(families) {
  const want = families?.length ? families.map((f) => f.toLowerCase()) : null;
  const blocks = new Map();
  for (const route of listRoutes()) {
    const html = loadHtml(route);
    for (const [, css] of html.matchAll(/<style data-framer-font-css="">([\s\S]*?)<\/style>/g)) {
      for (const [, comment, rule] of css.matchAll(
        /(?:\/\*\s*([\w-]+)\s*\*\/\s*)?(@font-face\s*{[^}]*})/g,
      )) {
        const family = rule.match(/font-family:\s*'([^']+)'/)?.[1];
        if (!family) continue;
        if (want && !want.includes(family.toLowerCase())) continue;
        blocks.set(rule, `/* ${family} — ${comment ?? "?"} */\n${rule}`);
      }
    }
  }
  return [...blocks.values()].join("\n");
}

function colorTable(html) {
  const tally = {};
  for (const [, c] of html.matchAll(/(#[0-9a-f]{3,8}\b|rgba?\([^)]+\))/gi)) {
    const k = c.toLowerCase();
    tally[k] = (tally[k] ?? 0) + 1;
  }
  return Object.entries(tally)
    .sort((a, b) => b[1] - a[1])
    .filter(([, n]) => n > 2);
}

function headings(html) {
  return [...stripCode(html).matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(([, tag, inner]) => ({
      tag,
      text: inner.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim(),
    }))
    .filter((h) => h.text && !NOISE.test(h.text));
}

function sections(html) {
  const clean = stripCode(html);
  const marks = [...clean.matchAll(/<(section|footer|nav|header)\b[^>]*>/gi)].map((m) => ({
    tag: m[1],
    at: m.index,
  }));
  return marks.map((mk, i) => ({
    tag: mk.tag,
    at: mk.at,
    text: textStream(clean.slice(mk.at, marks[i + 1]?.at ?? clean.length)).slice(0, 60),
  }));
}

function meta(html) {
  return {
    title: html.match(/<title>([^<]*)<\/title>/)?.[1],
    description: html.match(/<meta name="description" content="([^"]*)"/)?.[1],
    ogImage: html.match(/<meta property="og:image" content="([^"]*)"/)?.[1],
  };
}

const [, , cmd, route = "", ...rest] = process.argv;
const j = (v) => console.log(JSON.stringify(v, null, 1));

if (cmd === "routes") j(listRoutes());
else if (cmd === "fonts") j(fontMap());
else if (cmd === "fontcss") console.log(fontCss([route, ...rest].filter(Boolean)));
else if (cmd === "text") j(textStream(loadHtml(route)));
// Framer re-renders every section once per breakpoint variant; `utext` keeps
// first occurrences only, which is what content mining actually wants.
else if (cmd === "utext") j([...new Set(textStream(loadHtml(route)))]);
else if (cmd === "images") j(imageMap(loadHtml(route)));
else if (cmd === "colors") j(colorTable(loadHtml(route)));
else if (cmd === "headings") j(headings(loadHtml(route)));
else if (cmd === "sections") j(sections(loadHtml(route)));
else if (cmd === "meta") j(meta(loadHtml(route)));
else if (cmd === "raw") {
  const html = loadHtml(route);
  const [needle, span = "900"] = rest;
  let i = html.indexOf(needle);
  let n = 0;
  while (i !== -1 && n < 5) {
    console.log(`\n––– match @${i} –––\n` + html.slice(Math.max(0, i - 120), i + Number(span)));
    i = html.indexOf(needle, i + 1);
    n++;
  }
} else console.error("unknown cmd — see header comment for usage");
