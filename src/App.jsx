import React, { useEffect, useState } from 'react'; // Eliminado ' => ' que era un error tipográfico
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // 'hero' como sección inicial
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Asegurarse de que las clases se apliquen correctamente para la transición
    document.body.classList.add('transition-background-image'); 
    if (isTransitioning) {
      document.body.classList.add(theme === 'light' ? 'brighten-screen' : 'dim-screen');
    } else {
      document.body.classList.remove('brighten-screen', 'dim-screen');
    }
  }, [theme, isTransitioning]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Duración de la transición CSS
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Actualiza la sección activa para posible resaltado en la nav
      setIsMenuOpen(false); // Cierra el menú móvil después de la selección
    } else {
      console.warn(`Elemento con ID "${id}" no encontrado para el desplazamiento.`);
    }
  };

  return (
    <div
      className={`min-h-screen font-sans ${theme === 'dark' ? 'dark' : ''}
                   bg-cover bg-center bg-fixed transition-background-image`}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}${theme === 'dark' ? 'playground4.jpg' : 'playground2.jpg'})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-500 bg-opacity-5 dark:bg-gray-900 dark:bg-opacity-10 transition-colors duration-700"></div>
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-800 bg-opacity-70 flex justify-between items-center px-8 shadow-lg">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('hero')}></div>
          <div className="md:hidden flex items-center">
            {/* Botón de alternancia de tema para móvil */}
            <button onClick={toggleTheme} className={`relative w-16 h-8 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-500 mr-4 ${theme === 'light' ? 'bg-blue-300' : 'bg-indigo-700'}`} aria-label="Toggle theme">
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'}`}></div>
              {/* Iconos de sol y luna para el tema */}
              <svg className={`absolute left-2 w-5 h-5 text-yellow-500 transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.427 4.673a.75.75 0 010 1.06L6.366 6.827a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM4.5 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM7.427 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM12 21.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM17.327 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM19.5 12a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.327 4.673a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06z" /></svg>
              <svg className={`absolute right-2 w-5 h-5 text-blue-100 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.122 1.013 10.005 10.005 0 00-4.004 5.378 9.991 9.991 0 00-1.874 2.27 10.005 10.005 0 00-.685 1.545 9.991 9.991 0 00-.712 1.952 10.005 10.005 0 00.334 4.549.75.75 0 01-1.082.919A12.005 12.005 0 01.997 10.378C.997 5.952 4.493 2.296 9.528 1.718z" clipRule="evenodd" /></svg>
            </button>
            {/* Botón de menú para móvil */}
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
            </button>
          </div>
          {/* Navegación para escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-white font-medium">
              <li><a href="#about" onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition-colors">À Propos</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')} className="hover:text-green-300 transition-colors">Compétences</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-red-300 transition-colors">Projets</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-teal-300 transition-colors">Contact</a></li>
            </ul>
            {/* Botón de alternancia de tema para escritorio */}
            <button onClick={toggleTheme} className={`relative w-16 h-8 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-500 ml-4 ${theme === 'light' ? 'bg-blue-300' : 'bg-indigo-700'}`} aria-label="Toggle theme">
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'}`}></div>
              <svg className={`absolute left-2 w-5 h-5 text-yellow-500 transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.427 4.673a.75.75 0 010 1.06L6.366 6.827a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM4.5 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM7.427 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM12 21.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM17.327 17.327a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM19.5 12a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.327 4.673a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06z" /></svg>
              <svg className={`absolute right-2 w-5 h-5 text-blue-100 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.122 1.013 10.005 10.005 0 00-4.004 5.378 9.991 9.991 0 00-1.874 2.27 10.005 10.005 0 00-.685 1.545 9.991 9.991 0 00-.712 1.952 10.005 10.005 0 00.334 4.549.75.75 0 01-1.082.919A12.005 12.005 0 01.997 10.378C.997 5.952 4.493 2.296 9.528 1.718z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </nav>
        {/* Menú móvil desplegable */}
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
        {/* Renderizado de las secciones, pasando la prop 'id' */}
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
        
        <footer className="bg-gray-800 bg-opacity-70 text-white p-6 text-center text-sm rounded-t-lg mt-4 dark:bg-gray-950 dark:bg-opacity-70 dark:text-gray-300 shadow-xl">
          &copy; {new Date().getFullYear()} Lucas Casanove. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}

export default App;
