import FadeIn from "./FadeIn";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-6">Experience</h2>

                    <article className="mb-16 p-8 md:p-10 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-md">
                        <h3 className="text-xl font-semibold">
                            Advanced World Solutions, Inc.
                        </h3>

                        <div className="text-sm text-gray-500 mb-4">
                            Senior Software Engineer — 2014 – Present
                        </div>

                        <p className="text-gray-700 mb-6">
                            Developing and maintaining large-scale enterprise systems in automotive and manufacturing domains,
                            supporting web, batch, and integration workflows in legacy and modernized environments.
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
                                    Developed and maintained web applications using Java and JSP deployed in enterprise application servers.
                                </li>
                                <li>
                                    Implemented business logic for leasing, contracts, and customer workflows in automotive systems.
                                </li>
                                <li>
                                    Developed XML-based report layouts with dynamic data injection using SVF,
                                    enabling user-triggered enterprise document generation.
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
                                <li>Optimized batch processing handling 600,000+ records.</li>
                                <li>Improved execution time and reduced memory consumption through query tuning and efficient resource handling.</li>
                                <li>Applied Lazy Loading patterns to improve scalability and maintainability.</li>
                            </ul>
                        </div>

                        {/* Build & Release */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-2">
                                Build & Release Engineering
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    Managed build automation using Apache Ant and maintained structured deployment workflows.
                                </li>
                                <li>
                                    Deployed and supported applications across development, QA, and production environments.
                                </li>
                                <li>
                                    Maintained Git-based version control and coordinated stable production releases.
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-10">
                            <p className="text-sm font-semibold text-gray-600 mb-4">
                                Tech Stack
                            </p>

                            <div className="space-y-4">

                                {/* Core Backend */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        Core Backend
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Java</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">JSP</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">SQLJ</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Shell</span>
                                    </div>
                                </div>

                                {/* Database */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        Database
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">DB2</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Oracle</span>
                                    </div>
                                </div>

                                {/* Application & Reporting */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        Application & Reporting
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Enterprise Application Servers</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">SVF</span>
                                    </div>
                                </div>

                                {/* Integration */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        Integration
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">REST APIs</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">SOAP Web Services</span>
                                    </div>
                                </div>

                                {/* DevOps */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        DevOps & Tools
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Git</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Jenkins</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Apache Ant</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </article>
                </div>
            </FadeIn>
        </section>
    );
}