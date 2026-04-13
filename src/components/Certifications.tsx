import FadeIn from "./FadeIn";
import Image from "next/image";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-gray-50">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-12">
                        <FiAward style={{ color: "var(--color-accent)" }} />
                        Certifications
                    </h2>

                    {/* Technical Certifications */}
                    <h3 className="text-xl font-semibold mb-6">Technical</h3>
                    <div className="grid md:grid-cols-2 gap-10 mb-16">

                        {/* Oracle Java */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <Image
                                    src="/images/certifications/oracle-certified-associate-java-se-8-programmer.png"
                                    alt="Oracle"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div>
                                <p className="font-medium">
                                    Oracle Certified Associate, Java SE 8 Programmer
                                </p>
                                <p className="text-sm text-gray-500">2018</p>
                                <a
                                    href="https://www.credly.com/badges/6ef5ac0c-d9b8-4b19-bbf2-6f3c7176f229/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm underline mt-1 inline-block transition text-[#D97706] hover:text-[#B45309]"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>

                        {/* ITPEC FE */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <Image
                                    src="/images/certifications/Philnitslogo.png"
                                    alt="ITPEC"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div>
                                <p className="font-medium">
                                    PhilNITS Fundamental Information Technology Engineer (FE)
                                </p>
                                <p className="text-sm text-gray-500">2014</p>
                            </div>
                        </div>

                        {/* PCEP */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <Image
                                    src="/images/certifications/pcep-30-02-pcep-certified-entry-level-python-progra.png"
                                    alt="Python"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div>
                                <p className="font-medium">
                                    PCEP™ – Certified Entry-Level Python Programmer
                                </p>
                                <p className="text-sm text-gray-500">2022</p>
                                <a
                                    href="https://www.credly.com/badges/c55b7a38-561c-45ad-8b8c-18645b7a431f/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm underline mt-1 inline-block transition text-[#D97706] hover:text-[#B45309]"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <Image
                                    src="/images/certifications/jsa-41-01-jsa-certified-associate-javascript-programmer.png"
                                    alt="JavaScript"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div>
                                <p className="font-medium">
                                    JSA – Certified Associate JavaScript Programmer
                                </p>
                                <p className="text-sm text-gray-500">2022</p>
                                <a
                                    href="https://www.credly.com/badges/af9dfad6-3bd7-453f-b8a4-bafccee915df/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm underline mt-1 inline-block transition text-[#D97706] hover:text-[#B45309]"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Language Certification — promoted card */}
                    <div
                        className="flex items-start gap-5 border rounded-2xl p-6"
                        style={{
                            borderColor: "var(--color-accent)",
                            backgroundColor: "var(--color-accent-light)",
                        }}
                    >
                        <div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
                            <Image
                                src="/images/certifications/Japanese-Language_Proficiency_Test_logo.jpg"
                                alt="JLPT"
                                width={32}
                                height={32}
                            />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#92400E" }}>
                                Language Certification
                            </p>
                            <p className="font-medium text-amber-900">Japanese Language Proficiency Test N3</p>
                            <p className="text-sm text-amber-800 mt-0.5">2021</p>
                            <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                                Studied and passed in 2021. My work involves Japanese enterprise clients —
                                working in Japan made it both practical and personally rewarding.
                            </p>
                        </div>
                    </div>

                </div>
            </FadeIn>
        </section>
    );
}
