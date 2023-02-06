/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, 20rem)',
        'auto-fill-lg': 'repeat(auto-fill, 24rem)',
      },
    },
  },

  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};

