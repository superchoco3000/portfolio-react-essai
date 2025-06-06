
import React from 'react';
import ProjectCard from './ProjectCard'; // Import du composant ProjectCard
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


// Données de projets (vous pouvez ajouter ou modifier ces données)
const projects = [
  {
    id: 1,
    title: "Projet Portfolio Personnel",
    description: "Développement d'un site web portfolio réactif en utilisant React et Tailwind CSS pour présenter mes compétences et mes réalisations. Ce projet est celui sur lequel nous travaillons actuellement !",
    imageUrl: `/portfoliohaha.gif`,
    demoLink: "#home", // Lien vers la page d'accueil du portfolio
    githubLink: null, // À remplir plus tard, je vous le rappellerai !
    explanation: "Votre portfolio actuel, construit avec React et Tailwind CSS.",
  },
  {
    id: 2,
    title: "Application de Gestion de Tâches",
    description: "Une application web interactive pour gérer les tâches quotidiennes, avec des fonctionnalités d'ajout, de suppression et de marquage comme terminées. Réalisé avec JavaScript vanilla, HTML et CSS.",
    imageUrl: `/liste.gif`,
    demoLink: "https://superchoco3000.github.io/lista-tareas-ultimate/",
    githubLink: "https://github.com/superchoco3000/lista-tareas-ultimate",
    explanation: "Organisez vos tâches quotidiennes facilement avec cette application.",
  },
  {
    id: 3,
    title: "Jeu Casse-Brique en JavaScript",
    description: "Conception et implémentation d'un mini-jeu basé sur le navigateur, démontrant les concepts de logique de jeu et d'interaction utilisateur en JavaScript pur. Un classique du jeu vidéo.",
    imageUrl: `/gameboy.gif`,
    demoLink: "https://superchoco3000.github.io/mini-jeu-pong/",
    githubLink: "https://github.com/superchoco3000/mini-jeu-pong",
    explanation: "Un jeu d'arcade classique recréé en JavaScript.",
  },
  {
    id: 4,
    title: "Site E-commerce Maquette",
    description: "Création d'une maquette de site e-commerce avec une mise en page responsive, une navigation par catégorie et une page produit détaillée. Ce projet utilise PHP pour la logique serveur et MySQL pour la base de données.",
    imageUrl: `/jordan.gif`, 
    githubLink: "https://github.com/superchoco3000/database",
    isServerProject: true, // Indique que c'est un projet côté serveur
    explanation: "Site e-commerce avec backend PHP/MySQL.",
  },
  {
    id: 5,
    title: "Calculatrice Web",
    description: "Une calculatrice fonctionnelle implémentée en JavaScript, HTML et CSS. Elle gère les opérations arithmétiques de base et offre une interface utilisateur intuitive et réactive.",
    // Utiliser un placeholder si vous n'avez pas de GIF/image spécifique pour la calculatrice
    imageUrl: `/calculator.gif`,
    demoLink: "https://superchoco3000.github.io/Mini-calcul-web/", 
    githubLink: "https://github.com/superchoco3000/Mini-calcul-web", // Remplacez par le lien réel
    explanation: "Effectuez des opérations arithmétiques simples dans le navigateur.",
  },
  {
    id: 6,
    title: "Projet d'Analyse de Données Python",
    description: "Un script Python développé pour l'analyse et la visualisation de données complexes. Ce projet illustre l'utilisation de bibliothèques populaires comme Pandas et Matplotlib pour le traitement, la manipulation et la représentation graphique de l'information.",
    // Utiliser un placeholder si vous n'avez pas de GIF/image spécifique pour le projet Python
    imageUrl: `/python.gif`,
    githubLink: "https://github.com/superchoco3000/Analyseur-de-Texte-Python", 
    isCodeProject: true, // Indique que c'est un projet de code pur
    explanation: "Explorez et visualisez des données avec Python.",
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-8 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-700 shadow-inner rounded-xl mx-4 my-8"
    >
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4"
      >
        Mes Projets
        <span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span>
      </motion.h2>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants} // Utilisation des mêmes variants pour l'animation de chaque carte
            transition={{ duration: 0.6, delay: 0.1 * index }} // Délai progressif
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              explanation={project.explanation} // Nouvelle prop
              isServerProject={project.isServerProject} // Nouvelle prop
              isCodeProject={project.isCodeProject}     // Nouvelle prop
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-lg text-gray-700 dark:text-gray-300"
      >
        Plus sur mon profil GitHub.
      </motion.p>
      <motion.a
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.7 }}
        href="https://github.com/superchoco3000" // Remplacez par votre URL GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
      >
        Visiter mon GitHub
      </motion.a>
    </section>
  );
};

export default ProjectsSection;
