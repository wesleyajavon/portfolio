// src/components/Navbar.jsx
import { motion } from "framer-motion";
import { FaReact } from 'react-icons/fa';

export default function Navbar() {
    return (

        <nav className="flex items-center py-4 px-8 bg-neutral-950 shadow-md sticky top-0 z-50">

            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="container px-4 py-0 flex justify-center w-full"
            >

                <ul className="flex gap-6 text-slate-300 items-center font-mono">
                    <FaReact></FaReact>
                    <li><a href="#hero" className="hover:text-black">Home</a></li>
                    <li><a href="#about" className="hover:text-black">About</a></li>
                    <li><a href="#projects" className="hover:text-black">Projects</a></li>
                    <li><a href="#contact" className="hover:text-black">Contact</a></li>
                </ul>
            </motion.div>

        </nav>



    );
}
