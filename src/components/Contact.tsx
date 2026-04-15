import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
            Open to technical collaboration, enterprise work, and freelance opportunities.
            Feel free to reach out.
          </p>

          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">
            Get in touch
          </p>

          <div className="flex flex-col gap-4 text-gray-700">

            <a
              href="mailto:atienzapaulhenry@gmail.com"
              className="flex items-center gap-3 transition hover:text-[#D97706]"
            >
              <FiMail style={{ color: "var(--color-accent)" }} />
              atienzapaulhenry@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/paulhenryatienza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#D97706]"
            >
              <FiLinkedin style={{ color: "var(--color-accent)" }} />
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/phatienza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#D97706]"
            >
              <FiGithub style={{ color: "var(--color-accent)" }} />
              GitHub ↗
            </a>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
