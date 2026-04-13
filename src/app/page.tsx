import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}