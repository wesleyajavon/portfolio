// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-300 shadow-md sticky top-0 z-50">
      <h1 className="">Wesley Ajavon</h1>
      <ul className="flex gap-6 text-gray-600">
        <li><a href="#hero" className="hover:text-black">Home</a></li>
        <li><a href="#about" className="hover:text-black">About</a></li>
        <li><a href="#projects" className="hover:text-black">Projects</a></li>
        <li><a href="#contact" className="hover:text-black">Contact</a></li>
      </ul>
    </nav>
  );
}
