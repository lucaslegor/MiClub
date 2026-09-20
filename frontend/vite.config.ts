import { defineConfig } from 'vite';

// Configuración base de Vite. El plugin de React se agregará cuando se instalen
// las dependencias del frontend.
export default defineConfig({
  server: {
    port: 5173,
  },
});
