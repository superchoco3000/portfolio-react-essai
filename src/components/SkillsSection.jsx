import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ iconSrc, altText, skillName }) => {
    const [imageError, setImageError] = useState(false);
    useEffect(() => { setImageError(false); }, [iconSrc]);
    const handleError = () => { setImageError(true); };

    return (
        <div className="flex flex-col items-center p-4 bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 dark:border-gray-700/20">
            {imageError ? (
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-700/20 text-gray-400 text-4xl md:text-5xl font-bold rounded-full mb-4">
                    {altText ? altText.charAt(0).toUpperCase() : '?'}
                </div>
            ) : (
                // UTILISER import.meta.env.BASE_URL pour les images du dossier public/
                <img src={`${import.meta.env.BASE_URL}${iconSrc.substring(1)}`} alt={altText} className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 filter drop-shadow-[0_0_8px_rgba(0,191,255,0.7)]" onError={handleError} />
            )}
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">{skillName}</h3>
        </div>
    );
};

SkillCard.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired,
};

const SkillsSection = ({ id }) => {
    // Les chemins dans le tableau 'skills' ont déjà un '/' initial.
    // L'ajout de `${import.meta.env.BASE_URL}${iconSrc.substring(1)}` dans SkillCard
    // permettra de le gérer correctement.
    const skills = [
        { icon: '/react.png', alt: 'React Logo', name: 'React' },
        { icon: '/html.png', alt: 'HTML Logo', name: 'HTML' },
        { icon: '/css.png', alt: 'CSS Logo', name: 'CSS' },
        { icon: '/javascript.png', alt: 'JavaScript Logo', name: 'JavaScript' },
        { icon: '/IA.png', alt: 'IA Logo', name: 'IA' }, 
        { icon: '/mysql.png', alt: 'MySQL Logo', name: 'MySQL'},
        { icon: '/github.png', alt: 'GitHub Logo', name: 'GitHub' },
        { icon: '/php.png', alt: 'PHP Logo', name: 'PHP' },
        { icon: '/python.png' , alt: 'Python Logo', name: 'Python' },
        { icon: '/ubuntu.png', alt: 'Ubuntu Logo', name: 'Ubuntu' }, 
    ];

    return (
        <section id={id} className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4">Mes Compétences<span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span></h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">Voici un aperçu des technologies et outils avec lesquels je travaille au quotidien.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                    {skills.map((skill) => (<SkillCard key={skill.name} iconSrc={skill.icon} altText={skill.alt} skillName={skill.name} />))}
                </div>
            </div>
        </section>
    );
};

SkillsSection.propTypes = { id: PropTypes.string.isRequired };
export default SkillsSection;
