import React, { useState } from 'react';
import Switch from 'react-switch';

import { ReactComponent as LogoFr } from '../assets/icons/fr.svg';
import { ReactComponent as LogoEn } from '../assets/icons/en.svg';
import { Colors } from '../constants/Colors';

export default function LanguageSwitch({ language, setLanguage }) {
	const [langSwitch, setlangSwitch] = useState(language === 'fr' ? true : false);

	const handleSwitch = () => {
		setlangSwitch((oldValue) => !oldValue);
		setLanguage((oldValue) => (oldValue === 'fr' ? 'en' : 'fr'));
	};

	return (
		<Switch
			onChange={handleSwitch}
			checked={langSwitch}
			uncheckedIcon={<div />}
			checkedIcon={<div />}
			uncheckedHandleIcon={<LogoEn height='30' width='30' />}
			checkedHandleIcon={<LogoFr height='30' width='30' />}
			handleDiameter={30}
			offColor={Colors.background}
			onColor={Colors.background}
			offHandleColor={Colors.background}
			onHandleColor={Colors.background}
			height={40}
			width={70}
			activeBoxShadow='0px 0px 1px 2px #fffc35'
		/>
	);
}
