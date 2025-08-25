import React from "react";

export default function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0E1A2B] shadow-md z-50">
      <ul className="flex justify-center space-x-8 py-4 text-white font-medium">
        <li
          onClick={() => scrollToSection(refs.homeRef)}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection(refs.educationRef)}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Education
        </li>
        <li
          onClick={() => scrollToSection(refs.experienceRef)}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Experience
        </li>
        <li
          onClick={() => scrollToSection(refs.projectsRef)}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection(refs.contactRef)}
          className="cursor-pointer hover:text-yellow-400 transition"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
