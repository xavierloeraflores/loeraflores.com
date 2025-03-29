import Hero from "~/components/hero";
import Testimonials from "~/components/testimonials";
import Contact from "~/components/contact";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4">
      <Hero />
      <Testimonials />
      <Contact />
    </main>
  );
}
