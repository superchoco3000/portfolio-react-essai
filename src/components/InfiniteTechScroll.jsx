// src/components/InfiniteTechScroll.jsx
import React from 'react';

/**
 * Composant de défilement infini pour des icônes technologiques.
 * Affiche une série d'images qui défilent horizontalement en continu.
 * @param {Array<Object>} images - Tableau d'objets image, chaque objet doit avoir { src: string, alt: string }.
 */
const InfiniteTechScroll = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  // Duplique les images pour créer un effet de défilement infini sans interruption
  // On duplique deux fois pour s'assurer qu'il y a toujours du contenu à défiler
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div
      className="infinite-scroll-container w-full overflow-hidden whitespace-nowrap py-4
                 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-inner"
    >
      <div className="infinite-scroll-content inline-block animate-scroll-left">
        {duplicatedImages.map((image, index) => (
          <img
            key={index} // Clé unique pour chaque image, même si elles sont dupliquées
            src={image.src} // Chemin de l'image
            alt={image.alt} // Texte alternatif pour l'accessibilité
            // Classes Tailwind pour le style et la taille des icônes
            className="inline-block h-16 w-16 md:h-20 md:w-20 mx-4 object-contain filter grayscale hover:grayscale-0
                       transition-filter duration-300 transform hover:scale-110"
            // Le filtre grayscale et le hover effect ajoutent un peu d'interactivité
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteTechScroll;
