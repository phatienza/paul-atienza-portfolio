import FadeIn from "./FadeIn";
import { FiArrowUpRight } from "react-icons/fi";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-2">Freelance: Websites for Therapists</h2>
          <p className="text-gray-500 text-sm mb-10">
            I found a niche I care about — helping mental health professionals have an online presence as warm as they are.
          </p>

          <a
            href="https://services.paulatienza.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                  Active · US Market
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:underline underline-offset-4 decoration-[#D97706]">
                  Websites for Therapists &amp; Counselors
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                  I design and build warm, professional websites for therapists and mental health
                  professionals in the US — handling domain, hosting, and deployment so they can
                  focus on their clients. No templates, no page builders. Designed and coded from
                  scratch so the site actually fits the person.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Next.js", "Tailwind CSS", "Vercel", "Full-stack"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 transition hover:bg-[#FEF3C7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <FiArrowUpRight className="text-gray-400 group-hover:text-[#D97706] transition shrink-0 mt-1" size={20} />
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
