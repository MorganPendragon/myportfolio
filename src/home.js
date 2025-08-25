import React, { useRef, useState } from "react";
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

  const [homeKey, setHomeKey] = useState(0);

  // Scroll function
  const scrollToSection = (ref, section) => {
    if (section === "home") {
      setHomeKey((prev) => prev + 1); // 👈 force re-mount
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0E1A2B] text-white">
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, educationRef, experienceRef, projectsRef, contactRef }}
      />

      {/* Sections */}
      <section
        ref={homeRef}
        className="min-h-screen flex items-center justify-center mx-[10%] text-white overflow-hidden pt-20"
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
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
          key={`text-${homeKey}`}
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
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
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1.8, ease: "easeOut" }}
            className="inline-block mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:scale-105 duration-300"
          >
            Download CV →
          </motion.a>
        </motion.div>
      </section>

      <section
        ref={educationRef}
        className="min-h-screen flex items-center justify-center bg-[#1B2C40]"
      >
        <h2 className="text-5xl font-bold">Education</h2>
      </section>

      <section
        ref={experienceRef}
        className="min-h-screen flex items-center justify-center bg-[#21374E]"
      >
        <h2 className="text-5xl font-bold">Experience</h2>
      </section>

      <section
        ref={projectsRef}
        className="min-h-screen flex items-center justify-center bg-[#29415C]"
      >
        <h2 className="text-5xl font-bold">Projects</h2>
      </section>

      <section
        ref={contactRef}
        className="min-h-screen flex items-center justify-center bg-[#324D6B]"
      >
        <h2 className="text-5xl font-bold">Contact</h2>
      </section>
    </div>
  );
}
