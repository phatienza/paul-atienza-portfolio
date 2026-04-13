import FadeIn from "./FadeIn";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-6">Experience</h2>

                    <article
                        className="mb-16 p-8 md:p-10 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-md border-l-4"
                        style={{ borderLeftColor: "var(--color-accent)" }}
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-xl font-semibold">
                                Advanced World Solutions, Inc.
                            </h3>
                            <span
                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                style={{ backgroundColor: "var(--color-accent-light)", color: "#92400E" }}
                            >
                                10+ years
                            </span>
                        </div>

                        <div className="text-sm text-gray-500 mb-4">
                            Senior Software Engineer — 2014 – Present · Japan
                        </div>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Developing and maintaining large-scale enterprise systems in automotive and manufacturing,
                            supporting web, batch, and integration workflows across legacy and modernized environments.
                        </p>

                        {/* Enterprise Modernization */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-2">
                                Enterprise System Modernization & Maintenance
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    Maintained and enhanced enterprise applications built on legacy RPG/WebFacing architecture,
                                    supporting gradual modernization into Java-based web systems.
                                </li>
                                <li>
                                    Developed and maintained web applications using Java and JSP on enterprise application servers.
                                </li>
                                <li>
                                    Implemented business logic for leasing, contracts, and customer workflows in automotive systems.
                                </li>
                                <li>
                                    Developed XML-based report layouts with dynamic data injection using SVF for enterprise document generation.
                                </li>
                                <li>
                                    Performed integration testing and validation of RESTful and SOAP-based web services.
                                </li>
                            </ul>
                        </div>

                        {/* Performance */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-2">
                                High-Volume Batch Optimization
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    Optimized batch processing handling 600,000+ records, improving execution time and
                                    reducing memory consumption through query tuning and Lazy Loading patterns.
                                </li>
                            </ul>
                        </div>

                        {/* Build & Release */}
                        <div>
                            <h4 className="font-semibold mb-2">
                                Build & Release Engineering
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    Managed build automation with Apache Ant and Jenkins across development, QA, and production environments.
                                </li>
                                <li>
                                    Maintained Git-based version control and coordinated stable production releases.
                                </li>
                            </ul>
                        </div>

                    </article>
                </div>
            </FadeIn>
        </section>
    );
}
