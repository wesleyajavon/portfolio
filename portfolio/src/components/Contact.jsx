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
            <section id="contact" className="py-20 px-6 bg-neutral-600 text-center">
                <h2 className="text-3xl text-white font-bold mb-4">Contact</h2>
                <p className="mb-6 text-white">Get in touch via email or social media!</p>

                <div className="flex justify-center gap-4 text-2xl mb-6">
                    <a href="mailto:wesleyajavon2203@hotmail.com" className="text-lg text-neutral-300 hover:underline">
                        wesleyajavon2203@hotmail.com
                    </a>
                    <a href="https://github.com/wesleyajavon" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/wesleyajv" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </section>
        </motion.nav>



    );
}
