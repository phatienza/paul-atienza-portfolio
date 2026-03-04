import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <p className="text-gray-600 mb-10">
            I build and optimize enterprise systems with a focus on performance, reliability, and modernization.
            Currently expanding into data engineering and AI-driven solutions to design scalable, data-driven platforms.
            Open to meaningful technical collaboration and growth-oriented opportunities.
          </p>

          <div className="flex flex-col gap-4 text-gray-700">

            <a
              href="mailto:atienzapaulhenry@gmail.com"
              className="flex items-center gap-3 hover:text-gray-900 transition"
            >
              <FiMail className="text-gray-500" />
              atienzapaulhenry@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/paul-henry-atienza"
              target="_blank"
              className="flex items-center gap-3 hover:text-gray-900 transition"
            >
              <FiLinkedin className="text-gray-500" />
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/phatienza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gray-900 transition"
            >
              <FiGithub className="text-gray-500" />
              GitHub ↗
            </a>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}