// src/App.jsx
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

// Définissez la base URL ici pour faciliter la gestion des ressources statiques
export const BASE_URL = '/portfolio-react-essai'; // Exportez-le ici pour les autres composants

function App() {
  const [theme, setTheme] = useState('dark'); // Commencez en mode sombre
  const [isTransitioning, setIsTransitioning] = useState(false); // État pour gérer la transition de luminosité
  const [activeSection, setActiveSection] = useState('hero'); // Pour la navigation si nécessaire
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu burger mobile

  useEffect(() => {
    // Appliquer la classe 'dark' au document HTML si le thème est sombre
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Gérer les classes de luminosité pour la transition de thème
    document.body.classList.add('transition-background-image');

    if (isTransitioning) {
      document.body.classList.add(theme === 'light' ? 'brighten-screen' : 'dim-screen');
    } else {
      document.body.classList.remove('brighten-screen', 'dim-screen');
    }
  }, [theme, isTransitioning]);

  // Fonction pour basculer le thème (clair/sombre)
  const toggleTheme = () => {
    setIsTransitioning(true);
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Doit correspondre à la durée de la transition CSS
  };

  // Fonction pour basculer l'ouverture/fermeture du menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour gérer le défilement vers les sections et fermer le menu mobile
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false); // Ferme le menu après avoir cliqué sur un lien
    }
  };

  return (
    <div
      className={`min-h-screen font-sans ${theme === 'dark' ? 'dark' : ''}
                   bg-cover bg-center bg-fixed transition-background-image`}
      style={{
        backgroundImage: `url('${BASE_URL}/${theme === 'dark' ? 'playground3.jpg' : 'playground2.jpg'}')`,
      }}
    >
      {/* Overlay pour assombrir légèrement le fond */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-5 dark:bg-gray-900 dark:bg-opacity-10 transition-colors duration-700"></div>

      {/* Conteneur principal pour le contenu avec z-index */}
      <div className="relative z-10">
        {/* Barre de navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-800 bg-opacity-70 flex justify-between items-center px-8 shadow-lg">
          {/* Div vide pour remplacer "Lucas Casanove", conservant le onClick au cas où un logo serait ajouté */}
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('hero')}>
            {/* Vide - Vous pouvez ajouter un logo ou une icône ici si vous le souhaitez */}
          </div>

          {/* Bouton du menu burger et switch de thème pour mobile */}
          <div className="md:hidden flex items-center">
            {/* Switch de thème moderne pour mobile */}
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-500 mr-4
                                ${theme === 'light' ? 'bg-blue-300' : 'bg-indigo-700'}`}
              aria-label="Toggle theme"
            >
              {/* Cercle du toggle (le "pouce") */}
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500
                                  ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'}`}
              ></div>
              {/* Icône du soleil (positionnée à gauche) */}
              <svg
                className={`absolute left-2 w-5 h-5 text-yellow-500 transition-opacity duration-500
                                  ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.427 4.673a.75.75 0 010 1.06L6.366 6.827a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM4.5 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM7.427 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM12 21.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM17.327 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM19.5 12a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.327 4.673a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06z" />
              </svg>
              {/* Icône de la lune (positionnée à droite) */}
              <svg
                className={`absolute right-2 w-5 h-5 text-blue-100 transition-opacity duration-500
                                  ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.122 1.013 10.005 10.005 0 00-4.004 5.378 9.991 9.991 0 00-1.874 2.27 10.005 10.005 0 00-.685 1.545 9.991 9.991 0 00-.712 1.952 10.005 10.005 0 00.334 4.549.75.75 0 01-1.082.919A12.005 12.005 0 01.997 10.378C.997 5.952 4.493 2.296 9.528 1.718z" clipRule="evenodd" />
              </svg>
            </button>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {/* Icône SVG pour le menu burger */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Menu de navigation complet (visible sur desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-white font-medium">
              <li><a href="#about" onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition-colors">À Propos</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')} className="hover:text-green-300 transition-colors">Compétences</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-red-300 transition-colors">Projets</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-teal-300 transition-colors">Contact</a></li>
            </ul>
            {/* Switch de thème moderne pour desktop */}
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-500 ml-4
                                ${theme === 'light' ? 'bg-blue-300' : 'bg-indigo-700'}`}
              aria-label="Toggle theme"
            >
              {/* Cercle du toggle (le "pouce") */}
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500
                                  ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'}`}
              ></div>
              {/* Icône du soleil (positionnée à gauche) */}
              <svg
                className={`absolute left-2 w-5 h-5 text-yellow-500 transition-opacity duration-500
                                  ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.427 4.673a.75.75 0 010 1.06L6.366 6.827a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM4.5 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM7.427 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM12 21.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM17.327 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM19.5 12a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.327 4.673a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06z" />
              </svg>
              {/* Icône de la lune (positionnée à droite) */}
              <svg
                className={`absolute right-2 w-5 h-5 text-blue-100 transition-opacity duration-500
                                  ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.122 1.013 10.005 10.005 0 00-4.004 5.378 9.991 9.991 0 00-1.874 2.27 10.005 10.005 0 00-.685 1.545 9.991 9.991 0 00-.712 1.952 10.005 10.005 0 00.334 4.549.75.75 0 01-1.082.919A12.005 12.005 0 01.997 10.378C.997 5.952 4.493 2.296 9.528 1.718z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu mobile déroulant (visible si isMenuOpen est vrai et sur mobile) */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 bg-opacity-90 shadow-xl z-40 py-4 transform transition-transform duration-300 ease-in-out">
            <ul className="flex flex-col items-center space-y-4 text-white font-medium">
              <li><a href="#about" onClick={() => scrollToSection('about')} className="block py-2 hover:text-blue-300 transition-colors w-full text-center">À Propos</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')} className="block py-2 hover:text-green-300 transition-colors w-full text-center">Compétences</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')} className="block py-2 hover:text-red-300 transition-colors w-full text-center">Projets</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="block py-2 hover:text-teal-300 transition-colors w-full text-center">Contact</a></li>
            </ul>
          </div>
        )}

        {/* Sections de l'application */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-gray-800 bg-opacity-70 text-white p-6 text-center text-sm rounded-t-lg mt-4 dark:bg-gray-950 dark:bg-opacity-70 dark:text-gray-300 shadow-xl">
          &copy; {new Date().getFullYear()} Lucas Casanove. Tous droits réservés.
        </footer>
      </div>
    </div>
  );
}

export default App;
