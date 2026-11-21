import type { ReactNode } from "react";

/** The soft accent chip that heads every centred section. */
export default function Badge({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-[10px] rounded-[10px] bg-accent py-[9px] pl-[10px] pr-[14px] text-ink font-semibold">
      {icon}
      <span className="t-badge whitespace-nowrap">{children}</span>
    </span>
  );
}
