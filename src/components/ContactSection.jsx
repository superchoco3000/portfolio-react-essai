// src/components/ContactSection.jsx
import React from 'react';
import { BASE_URL } from '../App'; // Importez BASE_URL depuis App.jsx
import PropTypes from 'prop-types'; // N'oubliez pas d'importer PropTypes si vous l'utilisez

function ContactSection({ id }) { // Assurez-vous que le prop 'id' est bien reçu
  return (
    // Section contact avec padding et couleur de fond sombre
    <section id={id} className="py-16 px-4 bg-gray-800 text-white flex justify-center items-center snap-start">
      <div className="max-w-4xl mx-auto text-center bg-gray-900 bg-opacity-70 p-8 md:p-12 rounded-xl shadow-2xl backdrop-blur-sm">

        {/* Titre "Contactez-moi" */}
        <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4">
          Contactez-moi
          <span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span>
        </h2>

        {/* Texte introductif */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Intéressé par une collaboration ou une discussion ? N'hésitez pas à me laisser un message ou me contacter directement :
        </p>

        {/* Conteneur pour les informations de contact (téléphone et e-mail) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {/* Bouton/Lien Téléphone */}
          <a
            href="tel:0768657818" // Lien pour appeler sur mobile
            className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md
                       hover:shadow-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer"
            aria-label="Appeler le 07 68 65 78 18"
          >
            <img
              src={`${BASE_URL}/media.png`} // Chemin vers l'image du téléphone dans 'public/'
              alt="Icône Téléphone"
              className="w-10 h-10 object-contain"
              onError={(e) => {
                console.error(`Erreur: L'icône du téléphone n'a pas pu être chargée. Chemin tenté: ${e.target.src}.`);
                e.target.onerror = null; // Empêche les boucles d'erreur
                e.target.src = `https://placehold.co/40x40/333333/FFFFFF?text=📞`; // Fallback avec icône téléphone
              }}
            />
            <span className="text-xl text-gray-200">07 68 65 78 18</span>
          </a>

          {/* Bouton/Lien E-mail */}
          <a
            href="mailto:lucascasanove@yahoo.fr" // Lien pour envoyer un e-mail
            className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md
                       hover:shadow-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer"
            aria-label="Envoyer un e-mail à lucascasanove@yahoo.fr"
          >
            <img
              src={`${BASE_URL}/mail.png`} // Chemin vers l'image de l'e-mail dans 'public/'
              alt="Icône E-mail"
              className="w-10 h-10 object-contain"
              onError={(e) => {
                console.error(`Erreur: L'icône de l'e-mail n'a pas pu être chargée. Chemin tenté: ${e.target.src}.`);
                e.target.onerror = null; // Empêche les boucles d'erreur
                e.target.src = `https://placehold.co/40x40/333333/FFFFFF?text=📧`; // Fallback avec icône e-mail
              }}
            />
            <span className="text-xl text-gray-200">lucascasanove@yahoo.fr</span>
          </a>
        </div>

        {/* Formulaire de contact (reste le même) */}
        <form className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2 text-left">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white border-gray-600"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white border-gray-600"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white border-gray-600"
              placeholder="Votre message..."
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              Envoyer
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}

ContactSection.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ContactSection;
