import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 px-4 bg-gray-800 text-white flex justify-center items-center snap-start">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-gray-900 bg-opacity-70 p-8 md:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.6, delay: 0.2 }} className="md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-8">
          {/* UTILISER import.meta.env.BASE_URL pour les images du dossier public/ */}
          <img src={`${import.meta.env.BASE_URL}moi.jpg`} alt="Lucas Casanove Portrait" className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-blue-500" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/288x288/cccccc/000000?text=Lucas'; }} />
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.6, delay: 0.4 }} className="md:w-2/3 text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12 relative pb-4">
            À propos de moi
            <span className="block absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></span>
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6 md:text-center">
            <p>D'une passion pour les lettres à une fascination pour le code, mon parcours a toujours été guidé par la<strong className="text-blue-300"> création</strong>. Chaque défi en développement web est une opportunité<strong className="text-blue-300"> d'apprendre et de donner le meilleur de moi-même</strong>. Suivre l'évolution des outils et lescompétitions de développement m'anime autant qu'un grand match. Mon objectif : transformer cette passionen une carrière enrichissante.</p>
            <p>Je suis Lucas Casanove, un <strong className="text-green-300">Développeur Web</strong> et <strong className="text-purple-300">Intégrateur Web </strong>avec une capacité d'apprentissage <strong className="text-yellow-300">autodidacte</strong> prononcée. Cette approche m'a permis d'acquérir unesolide expertise en <strong className="text-blue-300">HTML, CSS, JavaScript, MySQL, PHP, Java, Python</strong>, et de maîtriser des outils comme <strong className="text-blue-300">GitHub</strong>.Mon parcours est celui d'un <strong className="text-yellow-300">Autodidacte</strong> passionné par l'apprentissage continu.</p>
            <p>Actuellement gérant du parc informatique au sein du Decathlon d'Annemasse, j'ai développé unesolideexpérience en <strong className="text-green-300">gestion de projet et support technique</strong>, que je transpose avec enthousiasmedans le développement web. Je suis bilingue en <strong className="text-blue-300">français et espagnol</strong>, ce qui facilite la communicationdans des contextes divers.</p>
            <p>Je me tiens informé des dernières avancées, notamment en <strong className="text-purple-300">ingénierie de prompt</strong> et en <strong className="text-green-300">gestion de code avec l'IA</strong>.Je suis désireux de mettre à profit mes compétences au sein d'une équipe dynamique pour contribuer activement àdes projets stimulants et créer des solutions numériques <strong className="text-yellow-300">créatives</strong> et <strong className="text-yellow-300">performantes.</strong></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
