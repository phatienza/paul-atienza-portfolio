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
                            Software Engineer — 2014 – Present
                        </div>

                        <p className="text-gray-700 mb-6">
                            Developing and maintaining enterprise systems across manufacturing and automotive domains.
                        </p>

                        {/* Automotive */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-2">
                                Automotive Enterprise System Modernization
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Migrated legacy RPG/WebFacing screens into modern web applications using Java and JSP</li>
                                <li>Supported company integration and leasing workflow enhancements</li>
                                <li>Maintained enterprise web and batch systems in production environments</li>
                                <li>
                                    Developed XML-based report layouts with dynamic data injection using SVF,
                                    enabling user-triggered generation of enterprise documents directly from web workflows.
                                </li>
                            </ul>
                        </div>

                        {/* Performance */}
                        <div className="mb-8">
                            <h4 className="font-semibold mb-2">
                                High-Volume Batch Performance Optimization
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Optimized a batch process handling 600,000+ records</li>
                                <li>Reduced memory usage and improved processing time</li>
                                <li>Applied Lazy Loading design pattern to enhance system efficiency</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-semibold mb-2">
                                CI/CD & Release Management
                            </h4>

                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    Maintained and enhanced existing Jenkins pipelines to support staged deployments.
                                </li>
                                <li>
                                    Configured build steps and deployment scripts across development, testing, and production environments.
                                </li>
                                <li>
                                    Managed Git workflows and coordinated structured releases to ensure system stability.
                                </li>
                            </ul>
                        </div>
                        {/* Tech Stack */}
                        <div className="mt-10">
                            <p className="text-sm font-semibold text-gray-600 mb-4">
                                Tech Stack
                            </p>

                            <div className="space-y-4">

                                {/* Backend */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        Backend
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Java</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">JSP</span>
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

                                {/* Enterprise Tools */}
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                        Enterprise Tools
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">SVF</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">RPG</span>
                                        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">WebFacing</span>
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
