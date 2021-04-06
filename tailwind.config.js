// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		height: { screen: "100vh" },
		extend: {
			backgroundColor: (theme) => ({
				...theme("colors"),
				primary: "#F2F2F2",
			}),
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
