// src/components/Navbar.jsx
import { motion } from "framer-motion";

export default function Navbar() {
    return (

        <nav className="flex justify-between items-center py-4 px-8 bg-gray-300 shadow-md sticky top-0 z-50">

            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="container px-4 py-0 flex justify-between"
            >
                <ul className="flex gap-6 text-gray-600 items-center">
                    <li><a href="#hero" className="hover:text-black">Home</a></li>
                    <li><a href="#about" className="hover:text-black">About</a></li>
                    <li><a href="#projects" className="hover:text-black">Projects</a></li>
                    <li><a href="#contact" className="hover:text-black">Contact</a></li>
                </ul>
            </motion.div>

        </nav>



    );
}
