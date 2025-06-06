// src/components/FadeInOnScroll.jsx
import React, { useRef, useEffect, useState } from 'react';

const FadeInOnScroll = ({ children, className = '' }) => {
  // Référence DOM pour l'élément observé
  const domRef = useRef();
  // État pour savoir si l'élément est visible
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    // Options pour l'Intersection Observer
    // threshold: 0.1 signifie que l'élément est considéré comme visible
    // dès que 10% de celui-ci entre dans le viewport.
    const observerOptions = {
      root: null, // Utilise le viewport comme conteneur racine
      rootMargin: '0px',
      threshold: 0.1, // Déclenche quand 10% de l'élément est visible
    };

    // Callback de l'observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Si l'élément est en intersection (visible), met à jour l'état
        if (entry.isIntersecting) {
          setVisible(true);
          // On peut déconnecter l'observer une fois l'animation déclenchée
          // si on ne veut qu'une seule animation par élément et éviter les re-déclenchements.
          observer.unobserve(domRef.current);
        }
      });
    }, observerOptions);

    // Commence à observer l'élément référencé
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Fonction de nettoyage pour déconnecter l'observer quand le composant est démonté
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []); // Ce useEffect s'exécute une seule fois après le montage initial du composant

  return (
    <div
      ref={domRef}
      // Applique les classes d'animation Tailwind CSS
      // 'transition-all duration-700 ease-out' pour une animation fluide
      // L'état 'isVisible' détermine les classes finales :
      // - Si 'isVisible' est vrai, 'opacity-100 translate-y-0' (visible, position normale)
      // - Sinon, 'opacity-0 translate-y-8' (caché, légèrement décalé vers le bas pour un effet "slide-up")
      className={`${className} transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children} {/* Rendre les enfants passés à ce composant */}
    </div>
  );
};

export default FadeInOnScroll;
