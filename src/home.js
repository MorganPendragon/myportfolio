import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Me from "./img/me.png";
import Bg from "./img/bg.png";
import Cv from "./cv/resume.pdf";
import './index.css';
import './index.js';
import { Vms1, Vms2, Vms3, Vms4, Vms5 } from "./index.js";
import { tmg1, tmg2, tmg3, tmg4 } from "./index.js";
import { mr1, mr2, mr3, mr4 } from "./index.js";
import { cp1, cp2, cp3 } from "./index.js";

export default function App() {

  const VmsImages = [Vms1, Vms2, Vms3, Vms4, Vms5];
  const tmg = [tmg1, tmg2, tmg3, tmg4];
  const mr = [mr1, mr2, mr3, mr4];
  const cp = [cp1, cp2, cp3];

  // Refs for sections
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // State for modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Open modal with project data
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Variants for reusable animations
  const fadeInLeft = {
    hidden: { x: -500, opacity: 0 },
    visible: { x: 250, opacity: 1 }
  };

  const fadeInRight = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 250, opacity: 1 }
  };

  const fadeleft = {
    hidden: { x: -500, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const faderight = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Modal animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0, ease: "easeIn" },
    }),
  };

  // Project data
  // 🔹 Projects Array (replace your current one)
  const projects = [
    {
      title: "Vaccination Management System - Frontend",
      tech: "PHP, MySql, Boostrap, HTML, JQuery",
      description:
        "A Database Management System that tracks the Vaccination status of students and faculty members.",
      images: VmsImages,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      tech: "HTML, Boostrap, JavaScript, Supabase",
      description:
        "A task tracker that allows you to update, monitor, and remind about the important task.",
      images: tmg,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Movie Review",
      tech: "Boostrap, Laravel, Javascript, MySQL",
      description: "A Database Management System that lets you review a Movie.",
      images: mr,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Captive Portal",
      tech: "HTML, CSS, JavaScript",
      description:
        "A Wi-Fi portal that authenticate users before granting network access, acting as a gateway to control and monitor network usage.",
      images: cp,
      demoLink: "#",
      githubLink: "#"
    }
  ];



  // Project Modal Component
  const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    if (!project) return null;

    const nextSlide = () => {
      setCurrentIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative bg-[#1A2C3F] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✖
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.tech}</p>
                <p className="mb-6">{project.description}</p>

                {/* Carousel */}
                {project.images && project.images.length > 0 && (
                  <div className="relative w-full h-64 flex items-center justify-center">
                    <motion.img
                      key={currentIndex}
                      src={project.images[currentIndex]}
                      alt={project.title}
                      className="w-full h-64 object-contain rounded-lg shadow-lg"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    />

                    {/* Prev button */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
                    >
                      <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                      </svg>


                    </button>

                    {/* Next button */}
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
                    >
                      <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>

                    </button>
                  </div>
                )}

                {/* Dots indicator */}
                {project.images && project.images.length > 1 && (
                  <div className="flex justify-center mt-3 space-x-2">
                    {project.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-yellow-400" : "bg-gray-500"
                          }`}
                      ></div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex space-x-4 mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };


  return (
    <div className="bg-[#0E1A2B] text-white">
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, educationRef, experienceRef, projectsRef, contactRef }}
      />

      {/* HOME */}
      <section
        ref={homeRef}
        className="min-h-screen flex justify-between items-center  text-white overflow-hidden pt-20"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center w-1/2 relative will-change-transform"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <img
            src={Me}
            alt="me"
            className="relative z-10 max-h-[80vh] bg-transparent"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-1/2  will-change-transform"
        >
          <h1 className="font-benguiat text-6xl font-bold leading-tight">
            Mark <br /> Vincent <br /> Agustin
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Web Developer and Systems Developer based in the Philippines.
          </p>

          {/* Download CV button as motion.a */}
          <motion.a
            href={Cv}  // <-- place your file in public/cv.pdf
            download="resume.pdf"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1.8, ease: "easeOut" }}
            className="inline-block mt-5 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:scale-105 duration-300"
          >
            Download CV →
          </motion.a>
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section
        ref={educationRef}
        className="min-h-screen flex items-center justify-center bg-[#1b263b] py-16"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 relative"
        >
          <h2 className="text-4xl md-text-5xl font-bold mb-12 text-center">
            Education
          </h2>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[97%] w-1 bg-gray-600"></div>

          <div className="space-y-12 relative">
            {/* Elementary */}
            <motion.div
              className="flex justify-start items-center relative"
              variants={fadeleft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-3xl font-bold text-yellow-400">Elementary</h3>
                <p className="text-gray-300 mt-2 font-semibold">Victoria East Central School</p>
                <p className="text-gray-400">2006 - 2014</p>
              </div>
              <div className="w-6 h-6 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>

            {/* High School */}
            <motion.div
              className="flex justify-end items-center relative"
              variants={faderight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-6 h-6 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-3xl font-bold text-yellow-400">High School</h3>
                <p className="text-gray-300 mt-2 font-semibold">Our Lady of the Sacred Heart College</p>
                <p className="text-gray-400">2014 - 2018</p>
              </div>
            </motion.div>

            {/* Senior High School */}
            <motion.div
              className="flex justify-start items-center relative"
              variants={fadeleft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-3xl font-bold text-yellow-400">Senior High</h3>
                <p className="text-gray-300 mt-2 font-semibold">Our Lady of the Sacred Heart College </p>
                <p className="text-gray-300 mt-2">Strand: Computer System Servicing</p>
                <p className="text-gray-400">2018 - 2020</p>
              </div>
              <div className="w-6 h-6 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>

            {/* College */}
            <motion.div
              className="flex justify-end items-center relative"
              variants={faderight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-6 h-6 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-3xl font-bold text-yellow-400">College</h3>
                <p className="text-xl text-gray-300 mt-2 font-semibold">Central Luzon State University</p>
                <p className="text-gray-300 mt-2">
                  Bachelor of Science in Information Technology Major in Systems Development
                </p>
                <p className="text-gray-400">2020 - 2025</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        ref={experienceRef}
        className="min-h-screen flex items-center justify-center bg-[#0d1b2a]"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md-text-5xl font-bold mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            <motion.div
              className="bg-[#0E1A2B] p-6 rounded-lg"
              variants={fadeleft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                IT staff
              </h3>
              <p className="text-gray-300 mt-2">Wesleyan University-Philippines Hospital</p>
              <p className="text-gray-400 mt-1">September 2024 to January 2025</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Assisted in maintaining and troubleshooting the hospital's computer systems and networks.</li>
                <li>Resolved 95% of IT issues within the same day.</li>
                <li>Helped set up, repair, and update hardware and software for staff use.</li>
                <li>Supported network connections, printers, and other IT equipment to ensure smooth operations.</li>
                <li>Worked with the IT team to respond to technical issues quickly and effectively.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        ref={projectsRef}
        className="min-h-screen flex items-center justify-center bg-[#1b263b] py-16"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md-text-5xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#0E1A2B] p-6 rounded-lg"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.tech}</p>
                <p className="mt-4">{project.description}</p>
                <button
                  onClick={() => openProjectModal(project)}
                  className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors"
                >
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />

      {/* CONTACT */}
      <section
        ref={contactRef}
        className="min-h-screen flex items-center justify-center bg-[#0d1b2a] py-16"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 w-full"
        >
          <h2 className="text-4xl md-text-5xl font-bold mb-12 text-center">
            Contact Me
          </h2>

          <motion.div
            className="bg-[#0E1A2B] p-8 rounded-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-[#1A2C3F] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-[#1A2C3F] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 bg-[#1A2C3F] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-center mb-6">
                Or reach me directly
              </h3>
              <div className="flex justify-center space-x-8">
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <span className="text-lg">📧</span> Email
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <span className="text-lg">💼</span> LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <span className="text-lg">🐙</span> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div >
  );
}