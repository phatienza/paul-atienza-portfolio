import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">About</h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            I&apos;m a software engineer from the Philippines, currently based in Japan. I studied
            Computer Science at the University of the Philippines and have been building enterprise
            systems professionally since 2014 — primarily in the automotive and manufacturing space.
            Alongside my main role, I freelance building websites for therapists and mental health
            professionals in the US. I&apos;m currently expanding into data and AI engineering and
            writing about the journey on this blog.
          </p>

          <div
            className="mt-10 border-l-4 px-6 py-4 rounded-r-xl"
            style={{
              borderColor: "var(--color-accent)",
              backgroundColor: "var(--color-accent-light)",
            }}
          >
            <p className="font-semibold text-sm text-amber-900 mb-1">
              🇯🇵 JLPT N3 — Japanese Language Proficiency
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Certified 2021. Working in a Japanese enterprise environment made learning the language
              both practical and personally rewarding.
            </p>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}
