// src/components/ProjectCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react'; // Importez l'icône de flèche

const ProjectCard = ({ title, description, imageUrl, demoLink, githubLink, explanation, isServerProject, isCodeProject }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-2xl p-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 border border-transparent hover:border-blue-500">
      <h3 className="text-3xl font-bold text-blue-400 mb-4 text-center">{title}</h3>
      <img
        src={imageUrl}
        alt={`Image du projet ${title}`}
        className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x200/555555/FFFFFF?text=Image+Non+Trouvée`; }}
      />
      <p className="text-gray-300 text-lg mb-6 flex-grow">{description}</p>

      {/* Nouvelle section pour l'explication sous la description */}
      {explanation && (
        <div className="flex items-center justify-center text-center text-gray-400 text-base italic p-2 border border-gray-700 rounded-md bg-gray-900 bg-opacity-50 mb-4">
          <ArrowRight className="inline-block w-4 h-4 mr-2 animate-pulse text-yellow-300" />
          <span>{explanation}</span>
        </div>
      )}

      <div className="flex flex-col justify-center items-center space-y-4 mt-auto"> {/* mt-auto pour pousser les boutons/explication vers le bas */}
        {isServerProject ? (
          <div className="text-center text-gray-400 text-sm italic p-2 border border-gray-700 rounded-md bg-gray-900 bg-opacity-50">
            <ArrowRight className="inline-block w-5 h-5 mr-2 animate-pulse text-yellow-300" />
            Ce projet nécessite un environnement serveur (PHP/MySQL) et n'a pas de démo live.
          </div>
        ) : isCodeProject ? (
          <div className="text-center text-gray-400 text-sm italic p-2 border border-gray-700 rounded-md bg-gray-900 bg-opacity-50">
            <ArrowRight className="inline-block w-5 h-5 mr-2 animate-pulse text-yellow-300" />
            Ceci est un projet de code seul, sans démo live.
          </div>
        ) : demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full text-center"
          >
            Voir le projet
          </a>
        ) : (
          <button
            className="bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed opacity-70 w-full text-center"
            disabled
          >
            Démo (à venir)
          </button>
        )}

        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full text-center"
          >
            GitHub
          </a>
        ) : (
          <button
            className="bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed opacity-70 w-full text-center"
            disabled
          >
            GitHub (à venir)
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
