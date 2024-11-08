// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: 'https://github.com/LuisDavid06/testPwa',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // Configuración para autoactualizar
      devOptions: {
        enabled: true,  // Habilitar PWA en el entorno de desarrollo también
      },
      manifest: {
        name: 'Mi Aplicación PWA',
        short_name: 'MiApp',
        description: 'Una aplicación web progresiva',
        theme_color: '#ffffff',  // Color de fondo del navegador
        icons: [
          {
            src: 'icons/icon-192x192.png', // Asegúrate de tener esta imagen
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png', // Asegúrate de tener esta imagen
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});