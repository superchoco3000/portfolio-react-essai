// src/components/SkillsSection.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Composant pour afficher une carte de compétence individuelle
const SkillCard = ({ iconSrc, altText, skillName }) => {
    // État pour gérer les erreurs de chargement d'image
    const [imageError, setImageError] = useState(false);

    // Réinitialise l'état d'erreur si la source de l'icône change
    useEffect(() => {
        setImageError(false);
    }, [iconSrc]);

    // Fonction appelée si l'image ne se charge pas
    const handleError = () => {
        setImageError(true);
    };

    return (
        // Rendre les cartes de compétences plus transparentes
        <div className="flex flex-col items-center p-4 bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 dark:border-gray-700/20">
            {/* Conditionnement pour afficher l'icône ou le texte de remplacement */}
            {imageError ? (
                // Afficher le texte de remplacement si l'image ne charge pas
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-700/20 text-gray-400 text-4xl md:text-5xl font-bold rounded-full mb-4">
                    {altText ? altText.charAt(0).toUpperCase() : '?'}
                </div>
            ) : (
                // Afficher l'image normalement
                <img
                    src={iconSrc}
                    alt={altText}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 filter drop-shadow-[0_0_8px_rgba(0,191,255,0.7)]" // Effet de lueur sur l'icône
                    onError={handleError} // Gérer les erreurs de chargement d'image
                />
            )}
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
                {skillName}
            </h3>
        </div>
    );
};

// PropTypes pour la validation des props de SkillCard
SkillCard.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    skillName: PropTypes.string.isRequired,
};

// Composant de la section des compétences
const SkillsSection = ({ id }) => {
    const skills = [
        { icon: '/react.png', alt: 'React Logo', name: 'React' },
        { icon: '/html.png', alt: 'HTML Logo', name: 'HTML' },
        { icon: '/css.png', alt: 'CSS Logo', name: 'CSS' },
        { icon: '/javascript.png', alt: 'JavaScript Logo', name: 'JavaScript' },
        { icon: '/IA.png', alt: 'IA Logo', name: 'IA' }, // Assurez-vous d'avoir IA.png dans public/
        { icon: '/mysql.png', alt: 'MySQL Logo', name: 'MySQL'},
        { icon: '/github.png', alt: 'GitHub Logo', name: 'GitHub' },
        { icon: '/php.png', alt: 'PHP Logo', name: 'PHP' },
        { icon: '/python.png' , alt: 'Python Logo', name: 'Python' },
        { icon: '/ubuntu.png', alt: 'Ubuntu Logo', name: 'Ubuntu' }, // Correction de la casse du nom
    ];

    return (
        // La section elle-même n'aura plus de fond (bg-gradient-to-br)
        // Elle laissera transparaître le fond du <body>
        <section id={id} className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
            {/* Effet de fond avec des formes abstraites (si vous voulez les conserver, sinon retirez ce div) */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
                {/* Titre de la section (maintenu ici) */}
                <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4">
                    Mes Compétences:
                    <span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span>
                </h2>

                {/* Texte de présentation (ajouté pour plus de contexte) */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Voici un aperçu des technologies et outils avec lesquels je travaille qu quotidien.
                </p>

                {/* Grille des cartes de compétences */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            iconSrc={skill.icon}
                            altText={skill.alt}
                            skillName={skill.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// PropTypes pour la validation des props de SkillsSection
SkillsSection.propTypes = {
    id: PropTypes.string.isRequired,
};

export default SkillsSection;
