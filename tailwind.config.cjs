/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors.js");

module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fill': 'repeat(auto-fill, 20rem)',
				'auto-fill-lg': 'repeat(auto-fill, 24rem)'
			},
			colors: {
				primary: colors.indigo,
			}
		}
	},

	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
	darkMode: 'class'
};
