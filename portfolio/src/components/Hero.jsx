// src/components/Hero.jsx
import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-center"
        >
            <section id="hero" className="py-24 bg-[url('/public/background-Hero.png')] bg-[47%_120%] sm:-[47%_80%]" >
                <a href="#projects" className="mt-41  inline-block px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded hover:text-blue-300">
                    View Projects 💡
                </a>
            </section>
        </motion.div>
    );
}
