import Link from "next/link";
import { Separator } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] w-full flex-col justify-center bg-white px-4 py-40 md:px-10">
      <Separator />
      <h1 className="t-h4 mt-16 text-charcoal">Page not found</h1>
      <p className="t-body mt-6 max-w-[420px] text-ash">
        That page isn’t here. Head back to the portfolio and pick up the thread.
      </p>
      <Link href="/" className="t-btn mt-10 text-accent underline underline-offset-4">
        Back to home
      </Link>
    </section>
  );
}
