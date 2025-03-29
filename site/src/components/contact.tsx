import { HighlightText } from "./highlight";
import CopyEmail from "./copy-email";

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="font-medium">
        If you would like to get in touch,{" "}
        <HighlightText>
          please send an email or DM me on social media.
        </HighlightText>
      </p>
      <CopyEmail />
    </section>
  );
}
