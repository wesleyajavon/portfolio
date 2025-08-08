// src/components/About.jsx
import FadeInOnScroll from "./utils/FadeInOnScroll";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <FadeInOnScroll>

      <section id="about" className="w-full bg-gradient-to-t from-gray-800 to-gray-500 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col text-center sm:text-left">
            <div className="flex justify-center mb-6">
              <img
                src="/me.jpg"
                alt="Wesley Ajavon"
                className="w-28 h-38 rounded-full object-cover shadow-md mb-4"
              />
            </div>

            <p className="text-white leading-relaxed font-mono text-base sm:text-lg">
              Hi, my name is
            </p>

            <h1 className="text-gray-300 text-3xl sm:text-4xl font-bold mt-2">
              Wesley Ajavon.
            </h1>

            <h2 className="text-gray-400 text-2xl sm:text-3xl font-bold mt-2">
              Full-Stack Developer.
            </h2>

            <p className="text-neutral-300 leading-relaxed mt-6 text-sm sm:text-base">
              After graduating from the University of Luxembourg with a Bachelor in Computer Sciences, I took a break from coding to fully commit to my college soccer career and pursue a Master in Business Analytics—an experience that shaped my discipline, resilience, and teamwork.
              <br /><br />
              Now, I’m diving back into tech with renewed focus and curiosity, building interactive and responsive full-stack web apps using tools like Next.js, React, Node.js, and other frameworks.
              <br /><br />
              Outside of tech and athletics, I’m also a pianist — I love exploring the creative intersection between structure and expression, both in music and in code.
              <br /><br />
              I’m always eager to learn, collaborate, and grow — and this portfolio reflects that journey toward a MERN tech stack career.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js" className="w-10 h-10" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind" className="w-10 h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="w-10 h-10" />
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
