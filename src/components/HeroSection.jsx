// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/background-hero.jpg')" }}>
      {/* Overlay pour assombrir l'image de fond et améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-4"
        >
          Lucas Casanove <br />
          <TypeAnimation
            sequence={[
              "Développeur Fullstack",
              1500, // pause for 1.5 seconds
              "Intégrateur Web",
              1500,
              "Bilingue Français/Espagnol",
              1500,
              "Problème Solver",
              1500,
              "Autodidacte",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-6xl text-blue-300"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Passionné par la création de solutions robustes et l'exploration de données complexes.
          Mon objectif : transformer les idées en applications performantes et intelligentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
                       transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Me contacter
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold
                       hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out
                       transform hover:scale-105 shadow-lg"
          >
            Voir mes projets
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
