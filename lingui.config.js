module.exports = {
	locales: ['en', 'fr'],
	sourceLocale: 'fr',
	catalogs: [
		{
			path: 'src/locales/{locale}',
			include: ['src/pages'],
			exclude: ['**/node_modules/**', 'public'],
		},
	],
	compileNamespace: 'cjs',
	format: 'po',
};
