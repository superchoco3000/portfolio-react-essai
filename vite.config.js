import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // C'est essentiel pour GitHub Pages. Il rend tous les chemins relatifs au sous-dossier.
  
  css: {
    postcss: './postcss.config.cjs', // Votre configuration pour PostCSS et Tailwind CSS
  },

  build: {
    outDir: 'dist', // Le dossier de sortie par défaut pour la production
    assetsDir: 'assets', // C'est là que Vite placera les fichiers générés (JS, CSS, images importées) dans 'dist'
    rollupOptions: {
      output: {
        // Cette section personnalise les noms des fichiers générés pour s'assurer
        // qu'ils sont trouvables par GitHub Pages dans votre sous-répertoire.
        
        // Pour les fichiers CSS (comme App.css après compilation)
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return `assets/[name]-[hash].css`; // Place le CSS dans dist/assets/
          }
          // Pour les images qui seraient importées directement dans les composants React (si vous en aviez)
          const imgExt = ['png', 'jpeg', 'jpg', 'gif', 'svg', 'webp'];
          if (assetInfo.name && imgExt.some(ext => assetInfo.name.endsWith(`.${ext}`))) {
            return `assets/images/[name]-[hash].[ext]`; // Place les images importées dans dist/assets/images/
          }
          return `assets/[name]-[hash].[ext]`; // Pour les autres types d'assets
        },
        // Pour les fichiers JavaScript principaux et les "chunks" (morceaux de code)
        chunkFileNames: 'assets/js/[name]-[hash].js', // Les fichiers JS "chunk" iront dans dist/assets/js/
        entryFileNames: 'assets/js/[name]-[hash].js', // Le fichier d'entrée principal (votre App.js compilé) ira dans dist/assets/js/
      },
    },
  },
});
