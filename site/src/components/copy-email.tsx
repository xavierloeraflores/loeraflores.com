"use client";
import Link from "next/link";
import { Copy } from "lucide-react";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

function copyEmail() {
  void navigator.clipboard.writeText("xavier@loeraflores.com");
  toast.success("Copied to clipboard");
}

export default function Contact() {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-lg">
        <Link href="mailto:xavier@loeraflores.com">xavier@loeraflores.com</Link>
      </h3>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          copyEmail();
        }}
      >
        <Copy />
      </Button>
    </div>
  );
}
