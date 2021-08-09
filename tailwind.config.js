// tailwind.config.js

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		height: { screen: 'calc(100vh - 20px)' },
		extend: {
			backgroundColor: (theme) => ({
				...theme('colors'),
				primary: '#F2F2F2',
				secondary: '#B3B3B3',
				primaryRed: '#FF6464',
				primaryOrange: '#FB9C51',
			}),
		},
		variants: {
			extend: {},
		},
		plugins: [],
		fontFamily: {
			coolvetica: 'Coolvetica',
		},
	},
};
