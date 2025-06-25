import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-10/12 mx-auto">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 h-6"
      />

      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{title}</h3>

      <p className="text-gray-300 text-sm sm:text-base">{description}</p>

      <p className="text-xs text-gray-400 mt-2 italic">{tech}</p>

      <div className="mt-4 flex justify-center gap-4 text-sm">
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
  );
};

export default ProjectCard;
