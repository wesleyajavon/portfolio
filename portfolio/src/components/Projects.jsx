// src/components/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Assembly Endgame",
        description: "🎮 A modern twist on the classic Hangman game, built from scratch using React.",
        tech: "React, JavaScript (ES6+), CSS Modules or Styled Components, Fetch API",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
        demo: "https://assembly-react-endgame.vercel.app/",
        code: "https://github.com/wesleyajavon/assembly-react-endgame/tree/main/assembly-endgame",
    },
    {
        id: 2,
        title: "Tenzies",
        description: "🎲 A simple Tenzies game built with React as a practice project to reinforce React fundamentals.",
        tech: "React, JavaScript, HTML, CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
        demo: "https://tenzies-react-nine.vercel.app/",
        code: "https://github.com/wesleyajavon/tenzies-react/tree/main/tenzies",
    },
    {
        id: 6,
        title: "Task manager",
        description: "📝To-do list",
        tech: "React, TypeScript, TailwindCSS, Vite",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        demo: "https://task-manager-react-six.vercel.app/",
        code: "https://github.com/wesleyajavon/task-manager-react",
    }, {
        id: 7,
        title: "Blog",
        description: "💻 A simple RESTful Blog API built with Node.js and Express, designed to handle blog post management with full CRUD operations.",
        tech: "Node.js, Express.js, Sqlite, JWT authentication",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        demo: "https://blog-nodejs-t006.onrender.com/",
        code: "https://github.com/wesleyajavon/blog-nodejs",
    },
    {
        id: 3,
        title: "Meme Generator",
        description: "This is a fun and interactive Meme Generator built with React 🧑🏾‍💻. It allows users to generate random meme images and overlay custom top and bottom text.",
        tech: "React, JavaScript, HTML, CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
        demo: "https://meme-generator-react-ten.vercel.app/",
        code: "https://github.com/wesleyajavon/meme-generator-react/tree/main/meme-generator",
    },
    {
        id: 5,
        title: "Chef Claude",
        description: "👨🏾‍🍳 Chef Claude is a fun and interactive React app that generates random recipes for you to try. It fetches data from an external API and displays details like the recipe name, ingredients, and an image — all wrapped in a clean, user-friendly interface",
        tech: "React, Claude Anthropic AI, API",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
        demo: "https://chef-claude-react.vercel.app/",
        code: "https://github.com/wesleyajavon/chef-claude-react/tree/main/chef_claude",
    },

];


const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (


        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3.5, delay: 5 }}
        >
            <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-500 text-center">
                <h2 className="text-gray-200 text-8xl font-bold mb-10 flex flex-row justify-center items-center">
                    <FaProjectDiagram className="mr-5" />

                    Projects
                </h2>


                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-8 justify-center ">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={item}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-[45%] lg:w-[40%]"
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.nav>



    );
}
