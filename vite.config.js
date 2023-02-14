import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // OPCIONES DE SERVIDOR Y PREVIU // MONITOREOS PREVIOS
  server: { // Para cambiar el servidor local por otro puerto
    port: 3030,
  },
  preview: { // Para desplegar un servidor pre-productivo // antes de generar este script hay que generar el build
    port: 4270,
  },

  // Para personalizar el objeto del build // procesos vinculados para produccion (para personalizar el dist)
  build: {
    incremental: true, // Acelerar el proceso de compilacion de los archivos cuando generas build
    babel: {  // Habilitar un trabajo en conjunto con babel del versionado de JS para manejo correcto a la version que necesite el navegador
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }, 
    /*typescript: { //Habilitar la aceleracion de compilacion de tu codigo TS hacia js
      tsconfig: "./tsconfig.json",
    },*/
    cache: true, // Habilitar una cache para optimizar el compilado de los recursos que caen en dist
    minity: true, // Habilitar la opcion de compresion optimizada para minimizar el tamano de los archivos generados.
    mode: "production", // Habilitar el modo de entorno para el cual estamos generando el build. Especificar el entorno en que estamos trabajando
    chunks: true, // Habilitar la configuracion del build mediante chunks parcelados. ()
    moduleBundling: true, // Habilitar la configuracion para minimizar el tamano de las librerias del proyecto que pasaran a produccion.
    prerenderPaths: ["/"],// Pre-carga de modulos de rutas, este guarda una reserva en memoria para cargar algun elemento (OPCIONAL)
    modulePreload: true, // Pre-carga general del codigo antes de visitarse (OPCIONAL)
    outDir: "build",// Podemos especificar otro directorio de salida, el nombre como tal, cambiarle el nombre dist por otro.
    devCode: true, // Habilitar el inspector de recomendaciones de cosas que te puedan hacer falta
    debug: true, // Habilitar el inspector de recomendaciones y errores
  }  
});
