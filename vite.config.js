import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // OPCIONES DE SERVIDOR Y PREVIU
  server: { // Para cambiar el servidor local por otro puerto
    port: 3030,
  },
  preview: { // Para desplegar un servidor pre-productivo
    port: 4270,
  }
});
