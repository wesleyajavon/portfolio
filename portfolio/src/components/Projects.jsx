// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Assembly Endgame",
    description: "🎮 It’s a modern take on the classic Hangman game — but more than a game",
    tech: "React, JavaScript (ES6+), CSS Modules or Styled Components, Fetch API",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    demo: "https://assembly-react-endgame.vercel.app/",
    code: "https://github.com/wesleyajavon/assembly-react-endgame/tree/main/assembly-endgame",
  },
  {
    title: "Tenzies",
    description: "🎲A simple Tenzies game built with React as a practice project to reinforce React fundamentals.",
    tech: "React, JavaScript, HTML, CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    demo: "https://tenzies-react-nine.vercel.app/",
    code: "https://github.com/wesleyajavon/tenzies-react/tree/main/tenzies",
  },
  {
    title: "Meme Generator",
    description: "This is a fun and interactive Meme Generator built with React 🧑🏾‍💻. It allows users to generate random meme images and overlay custom top and bottom text.",
    tech: "React, JavaScript, HTML, CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    demo: "https://meme-generator-react-ten.vercel.app/",
    code: "https://github.com/wesleyajavon/meme-generator-react/tree/main/meme-generator",
  },
  {
    title: "Chef Claude",
    description: "👨🏾‍🍳 Chef Claude is a fun and interactive React app that generates random recipes for you to try. It fetches data from an external API and displays details like the recipe name, ingredients, and an image — all wrapped in a clean, user-friendly interface",
    tech: "React, Claude Anthropic AI, API",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    demo: "https://chef-claude-react.vercel.app/",
    code: "https://github.com/wesleyajavon/chef-claude-react/tree/main/chef_claude",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-600 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects 📝</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-300 rounded-lg shadow-md p-4">
            <img src={proj.image} alt={proj.title} className="rounded mb-4 h-6" />
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
