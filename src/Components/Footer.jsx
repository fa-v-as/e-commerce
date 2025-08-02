import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-400 py-12 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Stay Connected</h2>
                <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
                    Follow us for the latest updates, offers & style drops.
                </p>

                {/* Social Icons */}
                <ul className="flex justify-center items-center gap-6 mt-6">
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube className="text-2xl hover:text-red-500 transition-colors duration-300" />
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="text-2xl hover:text-blue-500 transition-colors duration-300" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter className="text-2xl hover:text-blue-400 transition-colors duration-300" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Divider */}
            <div className="mt-10">
                <hr className="border-gray-700 w-[80%] mx-auto" />
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center mt-6">
                &copy; {new Date().getFullYear()} BuyNow. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
