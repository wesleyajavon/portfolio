import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, code }, index) => {
  return (
     <div key={index} className="bg-gray-300 rounded-lg shadow-md p-4">
            <img src={image} alt={title} className="rounded mb-4 h-6" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-sm text-gray-500 mt-2">{tech}</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href={demo} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Live</a>
              <a href={code} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Code</a>
            </div>
          </div>
  );
};

export default ProjectCard;
