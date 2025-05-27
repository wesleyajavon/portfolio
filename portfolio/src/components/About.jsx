// src/components/About.jsx
import React from 'react';
import { motion } from "framer-motion";


const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <motion.div transition={{ duration: 3.5, delay: 1.2, ease: "circOut" }} variants={container} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>


            <section id="about" className="py-20 px-6 bg-gradient-to-t from-gray-800 to-gray-500  text-left ">
                <div className="max-w-3xl mx-auto flex flex-col text-left">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/me.jpg"
                            alt="Wesley Ajavon"
                            className="w-28 h-38 rounded-full object-cover shadow-md mb-4"
                        />
                    </div>

                    <p className="text-white leading-relaxed font-mono text-left">
                        Hi, my name is
                    </p>
                    <h1 className="text-gray-300 text-3xl font-bold mb-2 leading-relaxed text-left mt-4">
                        Wesley Ajavon.
                    </h1>

                    <h1 className="text-gray-400 text-3xl font-bold mb-2 leading-relaxed text-left mt-4">
                        Full-Stack Developer.
                    </h1>

                    <p className="text-neutral-400 leading-relaxed  mt-4">
                        For the past two years, I took a break from coding to fully commit to my college soccer career — an experience that shaped my discipline, resilience, and teamwork. Now, I’m diving back into tech with renewed focus and curiosity, building interactive and responsive web apps with tools like React, Tailwind CSS, and other fun libraries.
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="w-10 h-10" />

                </div>
            </section>
        </motion.div>



    );
}
