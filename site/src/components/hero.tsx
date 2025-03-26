import { BoxReveal } from "./magicui/box-reveal";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "~/lib/utils";
export default function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="text-left text-2xl">Hi I&apos;m</h2>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Xavier Loera Flores<HighlightText>.</HighlightText>
          </p>
        </BoxReveal>
      </div>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-3xl font-bold">
          I am a <HighlightText>Software Engineer</HighlightText>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; with 4 years of experience{" "}
            <HighlightText> building fullstack applications</HighlightText>
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Link
          href="/files/resume.pdf"
          className={cn(
            buttonVariants({ variant: "default" }),
            "mt-[1.6rem] bg-[#5046e6]",
          )}
          target="_blank"
        >
          Resume
        </Link>
      </BoxReveal>
    </div>
  );
}

function HighlightText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#5046e6]">{children}</span>;
}
