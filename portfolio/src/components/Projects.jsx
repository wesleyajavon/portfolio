// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "A cool app that does X.",
    tech: "React, Tailwind, API",
    image: "https://via.placeholder.com/300x200",
    demo: "#",
    code: "#",
  },
  {
    title: "Project Two",
    description: "Another awesome build.",
    tech: "Node.js, MongoDB",
    image: "https://via.placeholder.com/300x200",
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={proj.image} alt={proj.title} className="rounded mb-4" />
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-600">{proj.description}</p>
            <p className="text-sm text-gray-500 mt-2">{proj.tech}</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href={proj.demo} className="text-blue-600 hover:underline">Live</a>
              <a href={proj.code} className="text-blue-600 hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
