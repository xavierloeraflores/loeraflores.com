import Hero from "~/components/hero";
import Testimonials from "~/components/testimonials";
import Contact from "~/components/contact";
import Projects from "~/components/projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
