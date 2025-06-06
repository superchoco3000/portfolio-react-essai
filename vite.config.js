    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      base: '/portfolio-react-essai/', // REMPLACE PAR LE NOM DE TON DÉPÔT GITHUB
      css: {
        postcss: './postcss.config.cjs',
      },
    });
    