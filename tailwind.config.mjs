/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Usa 'media' si prefieres detectar el modo oscuro automáticamente
  theme: {
    extend: {
      colors: {
        // Modo Claro
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F5',
          tertiary: '#E8F5E9', // Verde muy claro de fondo suave
        },
        green: {
          light: '#4CAF50',
          dark: '#2E7D32',
          emerald: '#66BB6A', // tono intermedio brillante
          lime: '#AED581', // más amable, para hover o badges
        },
        yellow: {
          light: '#FFA000',
          gold: '#FFD54F', // dorado solar suave
        },
        orange: {
          soft: '#FFB74D', // cálido pero profesional
          deep: '#F57C00', // para botones primarios o CTA
        },
        blue: {
          sky: '#81D4FA', // energía limpia y tecnología
          slate: '#607D8B', // profesionalismo, confiabilidad
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
          light: '#9E9E9E',
        },
        copper: {
          DEFAULT: '#B87333', // acento cálido opcional
        },
        line: {
          DEFAULT: '#E0E0E0',
        },

        // Modo Oscuro
        dark: {
          background: '#121212',
          secondary: '#1E1E1E',
          tertiary: '#263238',
          green: {
            light: '#66BB6A',
            dark: '#1B5E20',
            emerald: '#43A047',
            lime: '#8BC34A',
          },
          yellow: {
            light: '#FFCA28',
            gold: '#FFD54F',
          },
          orange: {
            soft: '#FF9800',
            deep: '#EF6C00',
          },
          blue: {
            sky: '#4FC3F7',
            slate: '#455A64',
          },
          copper: {
            DEFAULT: '#A0522D',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#BDBDBD',
            light: '#9E9E9E',
          },
          line: {
            DEFAULT: '#424242',
          },
        },
      },
    },
  },
  plugins: [],
};
