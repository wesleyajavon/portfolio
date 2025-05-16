// src/components/About.jsx
import React from 'react';
import { motion } from "framer-motion";


export default function About() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3.5, delay: 5 }}
        >
            <section id="about" className="py-20 px-6 bg-gray-300 text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="max-w-xl mx-auto text-gray-600">
                    I'm a passionate frontend developer with experience in building modern, responsive web apps.
                    I enjoy working with React, Tailwind CSS, and Node.js.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind" className="w-10 h-10" />
                </div>
            </section>
        </motion.nav>



    );
}
