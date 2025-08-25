import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Me from "./img/me.png";
import Bg from "./img/bg.png";

export default function App() {
  // Refs for sections
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Variants for reusable animations
  const fadeInLeft = {
    hidden: { x: -500, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const fadeInRight = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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
        className="min-h-screen flex items-center justify-center mx-[10%] text-white overflow-hidden pt-20"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center w-1/2 overflow-hidden relative will-change-transform"
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
          className="w-1/2 pl-12 will-change-transform"
        >
          <h1 className="text-6xl font-bold leading-tight">
            Mark <br /> Vincent <br /> Agustin
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Web Developer and Systems Developer based in the Philippines.
          </p>

          {/* Download CV button as motion.a */}
          <motion.a
            href="/cv.pdf"  // <-- place your file in public/cv.pdf
            download="Mark-Vincent-CV.pdf"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1.8, ease: "easeOut" }}
            className="inline-block mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:scale-105 duration-300"
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
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#0E1A2B] p-6 rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-300 mt-2">University of the Philippines</p>
              <p className="text-gray-400 mt-1">2018 - 2022</p>
              <p className="mt-4">
                Graduated with honors. Specialized in web development and
                software engineering.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#0E1A2B] p-6 rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                Full Stack Web Development Bootcamp
              </h3>
              <p className="text-gray-300 mt-2">Code Academy</p>
              <p className="text-gray-400 mt-1">2022</p>
              <p className="mt-4">
                Completed intensive 6-month program focusing on React, Node.js,
                and modern web development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        ref={experienceRef}
        className="min-h-screen flex items-center justify-center bg-[#0d1b2a] py-16"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            <motion.div
              className="bg-[#0E1A2B] p-6 rounded-lg"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                Senior Web Developer
              </h3>
              <p className="text-gray-300 mt-2">Tech Solutions Inc.</p>
              <p className="text-gray-400 mt-1">2022 - Present</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Led development of company's flagship web application</li>
                <li>Implemented responsive designs and optimized performance</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#0E1A2B] p-6 rounded-lg"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                Frontend Developer
              </h3>
              <p className="text-gray-300 mt-2">Digital Creations Studio</p>
              <p className="text-gray-400 mt-1">2020 - 2022</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Developed user interfaces for various client projects</li>
                <li>Collaborated with designers to implement pixel-perfect designs</li>
                <li>Improved website performance and SEO</li>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                tech: "React, Node.js, MongoDB",
                description:
                  "Full-featured online store with shopping cart, user authentication, and payment processing."
              },
              {
                title: "Task Management App",
                tech: "Vue.js, Firebase",
                description:
                  "Collaborative task management application with real-time updates and team collaboration features."
              },
              {
                title: "Weather Dashboard",
                tech: "React, OpenWeather API",
                description:
                  "Interactive weather application with 5-day forecast, location search, and responsive design."
              },
              {
                title: "Fitness Tracker",
                tech: "React Native, Express.js",
                description:
                  "Mobile application for tracking workouts, nutrition, and fitness progress with data visualization."
              }
            ].map((project, index) => (
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
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
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
