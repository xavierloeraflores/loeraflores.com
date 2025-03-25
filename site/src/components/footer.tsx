import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-background z-10 flex h-24 w-full flex-col gap-4 pt-4">
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
        <Link href="https://x.com/TheLoeraFlores ">
          <FaXTwitter className="h-6 w-6" />
        </Link>
      </div>

      <p className="text-muted-foreground w-full text-center text-sm">
        &copy; {2025} Xavier Loera Flores. All rights reserved.
      </p>
    </footer>
  );
}
