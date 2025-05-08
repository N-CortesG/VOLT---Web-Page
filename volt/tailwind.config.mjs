/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Usa 'media' si prefieres detectar el modo oscuro automáticamente
  theme: {
    extend: {
      colors: {
        // Light Mode
        background: {
          DEFAULT: '#FFFFFF', // Fondo Principal
          secondary: '#F5F5F5', // Fondo Secundario
        },
        green: {
          light: '#4CAF50', // Verde Naturaleza
          dark: '#2E7D32', // Verde Oscuro
        },
        yellow: {
          light: '#FFA000', // Amarillo Solar
        },
        text: {
          primary: '#212121', // Texto Principal
          secondary: '#757575', // Texto Secundario
        },
        line: {
          DEFAULT: '#E0E0E0', // Líneas y Bordes
        },

        // Dark Mode
        dark: {
          background: '#121212', // Fondo Principal (oscuro)
          secondary: '#1E1E1E', // Fondo Secundario (oscuro)
          green: {
            light: '#66BB6A', // Verde Naturaleza (modo oscuro)
            dark: '#1B5E20', // Verde Oscuro (modo oscuro)
          },
          yellow: {
            light: '#FFCA28', // Amarillo Solar (modo oscuro)
          },
          text: {
            primary: '#FFFFFF', // Texto Principal (blanco)
            secondary: '#BDBDBD', // Texto Secundario (gris claro)
          },
          line: {
            DEFAULT: '#424242', // Líneas y Bordes (modo oscuro)
          },
        },
      },
    },
  },
  plugins: [],
};
