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
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <img
                        src="/me.jpg"
                        alt="Wesley Ajavon"
                        className="w-28 h-38 rounded-full object-cover shadow-md mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">
                        I'm Wesley Ajavon — a frontend developer with a Bachelor's degree in Computer Science and currently pursuing a Master's in Business Analytics.
                        <br /><br />
                        For the past two years, I took a break from coding to fully commit to my college soccer career — an experience that shaped my discipline, resilience, and teamwork. Now, I’m diving back into tech with renewed focus and curiosity, building interactive and responsive web apps with tools like React, Tailwind CSS, and Framer Motion.
                        <br /><br />
                        Outside of tech and athletics, I’m also a pianist — I love exploring the creative intersection between structure and expression, both in music and in code.
                        <br /><br />
                        I’m always eager to learn, collaborate, and grow — and this portfolio reflects that journey.

                    </p>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind" className="w-10 h-10" />
                </div>
            </section>
        </motion.nav>



    );
}
