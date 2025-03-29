import { cn } from "~/lib/utils";

export function HighlightText({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return <span className={cn("text-[#5046e6]", className)}>{children}</span>;
}
