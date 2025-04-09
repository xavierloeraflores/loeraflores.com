import Hero from "~/components/hero";
import Testimonials from "~/components/testimonials";
import Contact from "~/components/contact";
import Projects from "~/components/projects";
import Companies from "~/components/companies";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-32">
      <Hero />
      <Companies />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
