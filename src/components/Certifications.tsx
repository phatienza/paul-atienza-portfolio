import FadeIn from "./FadeIn";
import Image from "next/image";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-white">
            <FadeIn>
                <div className="max-w-5xl mx-auto px-6">

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-12">
                        <FiAward className="text-gray-500" />
                        Certifications
                    </h2>

                    {/* Technical Certifications */}
                    <h3 className="text-xl font-semibold mb-6">Technical Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-10 mb-16">

                        {/* Oracle Java */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                            <Image
                                src="/oracle-certified-associate-java-se-8-programmer.png"
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
                                    className="text-sm text-black underline mt-1 inline-block"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>

                        {/* ITPEC FE */}
                        <div className="flex items-start gap-4">
                             <div className="bg-white p-4 rounded-xl shadow-sm">
                            <Image
                                src="/Philnitslogo.png"
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
                                src="/pcep-30-02-pcep-certified-entry-level-python-progra.png"
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
                                    className="text-sm text-black underline mt-1 inline-block"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="flex items-start gap-4">
                             <div className="bg-white p-4 rounded-xl shadow-sm">
                            <Image
                                src="/jsa-41-01-jsa-certified-associate-javascript-programmer.png"
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
                                    className="text-sm text-black underline mt-1 inline-block"
                                >
                                    View Credential →
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Language Certifications */}
                    <h3 className="text-xl font-semibold mb-6">Language Certification</h3>
                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="flex items-start gap-4">
                             <div className="bg-white p-4 rounded-xl shadow-sm">
                            <Image
                                src="/Japanese-Language_Proficiency_Test_logo.jpg"
                                alt="JLPT"
                                width={32}
                                height={32}
                            />
                            </div>
                            <div>
                                <p className="font-medium">Japanese Language Proficiency Test N3</p>
                                <p className="text-sm text-gray-500">2021</p>
                            </div>
                        </div>

                    </div>

                </div>
            </FadeIn>
        </section>
    );
}