import PropTypes from 'prop-types';

function ContactSection({ id }) {
  return (
    <section id={id} className="py-16 px-4 text-white flex justify-center items-center snap-start">
      <div className="max-w-4xl mx-auto text-center bg-white/5 dark:bg-gray-800/5 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white/10 dark:border-gray-700/20">
        <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4">Contactez-moi<span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span></h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">Intéressé par une collaboration ou une discussion ? N'hésitez pas à me laisser un message ou me contacter directement :</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a href="tel:0768657818" className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-white/10 dark:border-gray-700/20" aria-label="Appeler le 07 68 65 78 18">
            {/* UTILISER import.meta.env.BASE_URL pour les images du dossier public/ */}
            <img src={`${import.meta.env.BASE_URL}media.png`} alt="Icône Téléphone" className="w-10 h-10 object-contain" onError={(e) => { console.error(`Erreur: L'icône du téléphone n'a pas pu être chargée. Chemin tenté: ${e.target.src}.`); e.target.onerror = null; e.target.src = `https://placehold.co/40x40/333333/FFFFFF?text=📞`; }} />
            <span className="text-xl text-gray-200">07 68 65 78 18</span>
          </a>
          <a href="mailto:lucascasanove@yahoo.fr" className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-white/10 dark:border-gray-700/20" aria-label="Envoyer un e-mail à lucascasanove@yahoo.fr">
            {/* UTILISER import.meta.env.BASE_URL pour les images du dossier public/ */}
            <img src={`${import.meta.env.BASE_URL}mail.png`} alt="Icône E-mail" className="w-10 h-10 object-contain" onError={(e) => { console.error(`Erreur: L'icône de l'e-mail n'a pas pu être chargée. Chemin tenté: ${e.target.src}.`); e.target.onerror = null; e.target.src = `https://placehold.co/40x40/333333/FFFFFF?text=📧`; }} />
            <span className="text-xl text-gray-200">lucascasanove@yahoo.fr</span>
          </a>
        </div>
        <form className="w-full max-w-lg mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg border border-white/10 dark:border-gray-700/20">
          <div className="mb-6"><label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2 text-left">Nom</label><input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 dark:bg-gray-700/20 text-gray-900 dark:text-white border-gray-600" placeholder="Votre nom" /></div>
          <div className="mb-6"><label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2 text-left">Email</label><input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 dark:bg-gray-700/20 text-gray-900 dark:text-white border-gray-600" placeholder="Votre email" /></div>
          <div className="mb-8"><label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2 text-left">Message</label><textarea id="message" name="message" rows="6" className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 dark:bg-gray-700/20 text-gray-900 dark:text-white border-gray-600" placeholder="Votre message..."></textarea></div>
          <div className="flex items-center justify-center"><button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105 shadow-lg">Envoyer</button></div>
        </form>
      </div>
    </section>
  );
}

ContactSection.propTypes = { id: PropTypes.string.isRequired };
export default ContactSection;
