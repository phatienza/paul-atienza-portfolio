import { FiMail, FiLinkedin } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <FadeIn>
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-600 mb-10">
          I am currently engaged in enterprise software development and
          expanding into data engineering. I am open to professional
          discussions and collaboration opportunities.
        </p>

        <div className="flex flex-col gap-4 text-gray-700">
          
          <a
            href="mailto:atienzapaulhenry@gmail.com"
            className="flex items-center gap-3 hover:text-black transition"
          >
            <FiMail className="text-gray-500" />
            atienzapaulhenry@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/paul-henry-atienza"
            target="_blank"
            className="flex items-center gap-3 hover:text-black transition"
          >
            <FiLinkedin className="text-gray-500" />
            Paul Henry Atienza on LinkedIn
          </a>

        </div>
      </div>
      </FadeIn>
    </section>
  );
}