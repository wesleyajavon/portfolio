// src/components/Contact.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, delay: 7 }}
        >
            <section
                id="contact"
                className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-t from-gray-800 to-gray-500 text-center"
            >
                <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">
                    Contact
                </h2>
                <p className="mb-8 text-white text-base sm:text-lg">
                    Get in touch via email or social media!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl text-white">
                    <a
                        href="mailto:wesleyajavon2203@hotmail.com"
                        className="text-neutral-300 text-sm sm:text-base hover:underline"
                    >
                        wesleyajavon2203@hotmail.com
                    </a>

                    <div className="flex gap-6 text-white text-2xl">
                        <a
                            href="https://github.com/wesleyajavon"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="hover:text-neutral-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/wesleyajv"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-neutral-300"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
        </motion.nav>
    );
}
