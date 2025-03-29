import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaBluesky } from "react-icons/fa6";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background z-10 mt-16 flex min-h-24 w-full flex-col gap-4 py-8">
      <div
        id="footer-socials"
        className="flex items-center justify-center gap-4"
      >
        <Link href="https://github.com/xavierloeraflores">
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/xavierloeraflores/">
          <FaLinkedin className="h-6 w-6" />
        </Link>
        <Link href="https://bsky.app/profile/loeraflores.com">
          <FaBluesky className="h-6 w-6" />
        </Link>
        <Link href="https://x.com/TheLoeraFlores ">
          <FaXTwitter className="h-6 w-6" />
        </Link>
      </div>
      <Separator />
      <p className="text-muted-foreground w-full text-center text-sm">
        &copy; {2025} Xavier Loera Flores. All rights reserved.
      </p>
    </footer>
  );
}
