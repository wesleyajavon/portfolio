'use client';

import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <motion.div
      whileHover={{
        rotateZ: [-1, 1, -1, 1, 0],
        scale: 1.05,
        transition: {
          rotateZ: {
            duration: 0.6,
            repeat: 0,
            ease: "easeInOut",
          },
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 15,
          },
        },
      }}
      className="w-full bg-transparent"  // full width container
    >
      <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/10 dark:border-white/20 rounded-2xl shadow-lg p-5 sm:p-6 max-w-md mx-auto">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-md mb-4 w-full h-36 object-contain"
          />
        )}

        <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>

        <p className="text-gray-300 text-sm text-center">{description}</p>

        <p className="text-xs text-gray-400 mt-3 italic text-center">{tech}</p>

        <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
