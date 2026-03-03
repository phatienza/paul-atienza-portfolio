import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}