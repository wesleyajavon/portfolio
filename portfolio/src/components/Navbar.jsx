'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from 'react-icons/fa';
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-1 left-0 right-0 z-50 flex justify-center">
      <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/10 dark:border-white/20 shadow-md rounded-full w-[90%] max-w-3xl px-6 py-2 flex items-center justify-between text-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-slate-100 font-bold text-lg">
          <FaReact className="text-blue-300" />
        </div>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="hidden sm:flex gap-5 text-slate-100 items-center justify-center font-mono text-sm"
        >
          <li><a href="#hero" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-100 text-2xl focus:outline-none">
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
          className="absolute top-[72px] left-1/2 z-40 w-[80%] -translate-x-1/2 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10 px-4 pb-4 pt-3 space-y-3 text-center font-mono text-slate-100 sm:hidden shadow-lg text-sm"
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
