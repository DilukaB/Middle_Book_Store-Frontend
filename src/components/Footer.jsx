import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-700 text-white py-6">
            <div className="container mx-auto px-8 text-center">
                {/* Company Info */}
                <p className="text-3xl font-semibold">BookStore</p>
                <p className="text-lg mt-8 mb-10">
                    Your favorite place to find amazing books. Discover, read, and explore with us.
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-primary transition-all"
                    >
                        <FaFacebook size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-primary transition-all"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-primary transition-all"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>

                {/* Back to Top */}
                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center mx-auto space-x-2 text-primary hover:underline transition-all"
                >
                    <FaArrowUp size={16} />
                    <span>Back to Top</span>
                </button>

                {/* Copyright */}
                <p className="text-gray-400 text-sm mt-4">
                    &copy; {new Date().getFullYear()} BookStore. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
