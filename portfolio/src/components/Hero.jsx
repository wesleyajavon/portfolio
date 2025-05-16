// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";


export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-center"
        >
            <section id="hero" className="text-center py-20 bg-gray-500">

                <h2 className="text-4xl font-bold mb-2">Hey, I'm Wesley 👋🏾</h2>
                <p className="text-xl mb-4">Frontend Developer 💻</p>

                <div className="flex justify-center gap-4 text-2xl mb-6">
                    <a href="https://github.com/wesleyajavon" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/wesleyajv" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <a href="#projects" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                    View Projects 💡
                </a>


            </section>
        </motion.div>

    );
}
