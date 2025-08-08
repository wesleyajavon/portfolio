import React from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./utils/FadeInOnScroll";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <FadeInOnScroll className="hidden md:block text-center">  
      <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/10 dark:border-white/20 rounded-2xl shadow-lg p-5 sm:p-6 max-w-md mx-auto">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-md mb-4 h-6"
          />
        )}

        <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
        <p className="text-gray-300 text-sm text-center">{description}</p>
        <p className="text-xs text-gray-400 mt-3 italic text-center">{tech}</p>

        <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
          {[{ label: "Live", href: demo }, { label: "Code", href: code }].map(
            ({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden font-medium cursor-pointer select-none leading-tight text-blue-400"
              >
                <span className="block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                >
                  {label}
                </span>
              </a>
            )
          )}
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default ProjectCard;
