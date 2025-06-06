import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  // UTILISER import.meta.env.BASE_URL pour les images du dossier public/
  { id: 1, title: "Projet Portfolio Personnel", description: "Développement d'un site web portfolio réactif en utilisant React et Tailwind CSS pour présenter mes compétences et mes réalisations. Ce projet est celui sur lequel nous travaillons actuellement !", imageUrl: `${import.meta.env.BASE_URL}portfoliohaha.gif`, demoLink: "#home", githubLink: "https://github.com/superchoco3000/portfolio-react-essai", explanation: "Votre portfolio actuel, construit avec React et Tailwind CSS.", },
  { id: 2, title: "Application de Gestion de Tâches", description: "Une application web interactive pour gérer les tâches quotidiennes, avec des fonctionnalités d'ajout, de suppression et de marquage comme terminées. Réalisé avec JavaScript vanilla, HTML et CSS.", imageUrl: `${import.meta.env.BASE_URL}liste.gif`, demoLink: "https://superchoco3000.github.io/lista-tareas-ultimate/", githubLink: "https://github.com/superchoco3000/lista-tareas-ultimate", explanation: "Organisez vos tâches quotidiennes facilement avec cette application.", },
  { id: 3, title: "Jeu Casse-Brique en JavaScript", description: "Conception et implémentation d'un mini-jeu basé sur le navigateur, démontrant les concepts de logique de jeu et d'interaction utilisateur en JavaScript pur. Un classique du jeu vidéo.", imageUrl: `${import.meta.env.BASE_URL}gameboy.gif`, demoLink: "https://superchoco3000.github.io/mini-jeu-pong/", githubLink: "https://github.com/superchoco3000/mini-jeu-pong", explanation: "Un jeu d'arcade classique recréé en JavaScript.", },
  { id: 4, title: "Site E-commerce Maquette", description: "Création d'une maquette de site e-commerce avec une mise en page responsive, une navigation par catégorie et une page produit détaillée. Ce projet utilise PHP pour la logique serveur et MySQL pour la base de données.", imageUrl: `${import.meta.env.BASE_URL}jordan.gif`, githubLink: "https://github.com/superchoco3000/database", isServerProject: true, explanation: "Démonstration des fonctionnalités d'un site e-commerce avec backend PHP/MySQL.", },
  { id: 5, title: "Calculatrice Web", description: "Une calculatrice fonctionnelle implémentée en JavaScript, HTML et CSS. Elle gère les opérations arithmétiques de base et offre une interface utilisateur intuitive et réactive.", imageUrl: `${import.meta.env.BASE_URL}calculator.gif`, demoLink: "https://superchoco3000.github.io/Mini-calcul-web/", githubLink: "https://github.com/superchoco3000/Mini-calcul-web", explanation: "Effectuez des opérations arithmétiques simples dans le navigateur.", },
  { id: 6, title: "Projet d'Analyse de Données Python", description: "Un script Python développé pour l'analyse et la visualisation de données complexes. Ce projet illustre l'utilisation de bibliothèques populaires comme Pandas et Matplotlib pour le traitement, la manipulation et la représentation graphique de l'information.", imageUrl: `${import.meta.env.BASE_URL}python.gif`, githubLink: "https://github.com/superchoco3000/Analyseur-de-Texte-Python", isCodeProject: true, explanation: "Explorez et visualisez des données avec Python.", },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }, };

  return (
    <section id="projects" ref={ref} className="py-20 px-8 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-700 shadow-inner rounded-xl mx-4 my-8">
      <motion.h2 initial="hidden" animate={inView ? "visible" : "hidden"} variants={sectionVariants} transition={{ duration: 0.6 }} className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4">Mes Projets<span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span></motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div key={project.id} initial="hidden" animate={inView ? "visible" : "hidden"} variants={sectionVariants} transition={{ duration: 0.6, delay: 0.1 * index }}>
            <ProjectCard
              title={project.title} description={project.description} imageUrl={project.imageUrl} demoLink={project.demoLink}
              githubLink={project.githubLink} explanation={project.explanation} isServerProject={project.isServerProject} isCodeProject={project.isCodeProject}
            />
          </motion.div>
        ))}
      </div>
      <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={sectionVariants} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 text-lg text-gray-700 dark:text-gray-300">Plus sur mon profil GitHub.</motion.p>
      <motion.a initial="hidden" animate={inView ? "visible" : "hidden"} variants={sectionVariants} transition={{ duration: 0.6, delay: 0.7 }} href="https://github.com/superchoco3000" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300">Visiter mon GitHub</motion.a>
    </section>
  );
};

export default ProjectsSection;
