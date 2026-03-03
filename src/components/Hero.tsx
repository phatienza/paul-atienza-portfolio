import { FiBriefcase, FiDownload } from "react-icons/fi";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="top" className="pt-24 py-16 md:py-24 text-center bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-12 items-center">

        {/* Profile image on the left, text on the right for larger screens, stacked on smaller screens */}
        <div className="rounded-2xl transition duration-500 flex justify-center md:justify-end hover:scale-102" >
            <Image
              src="/profile.jpeg"
              alt="Paul Henry Atienza"
              width={400}
              height={600}
              className="rounded-2xl shadow-md object-cover w-48 sm:w-56 md:w-80 lg:w-96 mx-auto"
              priority
            />
        </div>
        {/* Rigth Text*/}
        <div className="text-left md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight transition-all duration-500 hover:scale-102">
            Paul Henry Atienza
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Software Engineer
          </h2>

          <h3 className="text-xl md:text-2xl text-gray-600 mb-6">
            Expanding into Data & AI Engineering
          </h3>

          <p className="text-gray-500 mb-8">
            Building scalable backend systems and modern
            data-driven solutions.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#experience"
              className="bg-black text-white px-6 py-3 rounded-lg inline-flex items-center gap-2"
            >
              <FiBriefcase />
              View Experience
            </a>

            <a
              href="/cv.pdf"
              className="border border-black px-6 py-3 rounded-lg inline-flex items-center gap-2"
              download
            >
              <FiDownload />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-gray-200 max-w-5xl mx-auto" />
    </section>
  );
}