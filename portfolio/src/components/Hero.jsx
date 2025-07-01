// src/components/Hero.jsx
import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block text-center"
        >
            <section 
              id="hero" 
              className="w-full py-50 bg-[url('/public/background-Hero.png')] bg-[30%_100%] bg-no-repeat bg-cover"
            >

            </section>
        </motion.div>
    );
}
