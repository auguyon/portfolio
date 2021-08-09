import React, { useState, useEffect } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { messages as enMessages } from '../locales/en.js';
import { messages as frMessages } from '../locales/fr.js';

import Home from './Home';
import AboutMe from './AboutMe';
import Educations from './Educations';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer.jsx';

i18n.load({ fr: frMessages, en: enMessages });

function App() {
	const navLang = navigator.language || navigator.userLanguage;
	const [language, setLanguage] = useState(navLang.includes('en') ? 'en' : 'fr');

	useEffect(() => {
		if (language) {
			i18n.activate(language);
		}
	}, [language]);

	return (
		<I18nProvider i18n={i18n}>
			<div className='h-auto w-full'>
				<Home language={language} setLanguage={setLanguage} />
				<AboutMe />
				<Educations />
				<Contact />
				<Skills />
				<Footer />
			</div>
		</I18nProvider>
	);
}

export default App;
