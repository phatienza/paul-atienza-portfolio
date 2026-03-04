
export default function Footer() {

    return (
        <footer className="bg-white pt-16 pb-12">
            <div className="max-w-5xl mx-auto px-6">

                {/* Divider */}
                <div className="border-t border-gray-200 mb-8"></div>

                {/* Top Row */}
                <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-700 font-medium">
                        Paul Henry Atienza
                    </p>

                    <a
                        href="#top"
                        className="text-gray-400 hover:text-gray-800 transition duration-300"
                    >
                        Back to top ↑
                    </a>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gray-500 text-center mt-6 max-w-md mx-auto leading-relaxed">
                    Enterprise software engineer focused on building systems that last.
                </p>

                {/* Copyright */}
                <p className="text-xs text-gray-400 text-center mt-8">
                    ©2026 Paul Henry Atienza. All rights reserved.
                </p>

            </div>
        </footer>
    );
}