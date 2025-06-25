// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from 'react-icons/fa';
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-neutral-950 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 text-slate-300 font-bold text-lg">
                    <FaReact className="text-blue-300" />
                </div>

                {/* Desktop Nav */}
                <motion.ul
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="hidden sm:flex gap-6 text-slate-300 items-center font-mono"
                >
                    <li><a href="#hero" className="hover:text-blue-300 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-300transition">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
                </motion.ul>

                {/* Mobile menu toggle */}
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-300 text-2xl focus:outline-none">
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="sm:hidden bg-neutral-900 text-slate-300 px-4 pb-4 space-y-3 text-center font-mono"
                >
                    <li><a href="#hero" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" className="block hover:text-white" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#projects" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </motion.ul>
            )}
        </nav>
    );
}
