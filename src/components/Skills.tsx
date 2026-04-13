import { FiCode } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function Skills() {
    const skillGroups = [
        {
            title: "Backend & Enterprise",
            skills: ["Java", "JSP", "Servlets", "DB2", "Oracle", "Batch Processing"],
        },
        {
            title: "Frontend & Web",
            skills: ["JavaScript", "HTML", "CSS"],
        },
        {
            title: "DevOps & Tools",
            skills: ["Git", "Jenkins", "CI/CD", "Linux", "Shell Scripting"],
        },
        {
            title: "Data & AI (Expanding)",
            skills: ["Python", "SQL", "Data Analysis"],
        },
        {
            title: "Languages",
            skills: ["Japanese (JLPT N3)", "English (Professional)"],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-white">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-12">
                        <FiCode style={{ color: "var(--color-accent)" }} />
                        Skills
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {skillGroups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-xl font-semibold mb-4">
                                    {group.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-gray-100 rounded-full text-sm transition duration-300 hover:bg-[#FEF3C7] hover:text-amber-900"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
