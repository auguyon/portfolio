import React, { useEffect, useState } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';
import { t } from '@lingui/macro';

import LanguageSwitch from '../components/LanguageSwitch';
import workspace from '../assets/photos/workspace.png';
import { ReactComponent as LogoAG } from '../assets/icons/ag.svg';

export default function Home({ language, setLanguage }) {
	const options = {
		interval: 20,
	};
	const { result, dencrypt } = useDencrypt(options);
	const [timeout, setTimeout] = useState(60);
	const subtitles = [
		t`Full-Stack developer`,
		t`Student at 42 Paris`,
		t`ReactJS, NodeJS Developer`,
	];

	useEffect(() => {
		let i = 0;

		const action = setInterval(() => {
			dencrypt(subtitles[i]);

			i = i === subtitles.length - 1 ? 0 : i + 1;
			if (timeout === 60) setTimeout(2000);
		}, timeout);

		return () => clearInterval(action);
	});

	return (
		<div className="h-screen w-full flex flex-col justify-between bg-primary">
			<div className="w-full h-auto flex flex-row justify-between items-center p-6">
				<LogoAG height="100" width="100" />
			</div>
			<div className="absolute top-4 right-2">
				<LanguageSwitch language={language} setLanguage={setLanguage} />
			</div>
			<div className="h-auto w-full flex flex-col items-center ">
				<div className="text-7xl coolvetica">Aurélien Guyon</div>
				<div className="text-4xl mt-4">{result}</div>
			</div>
			<div className="h-auto w-full flex flex-col justify-end items-center">
				<img src={workspace} width="40%" height="40%" alt="workspace aurelien guyon" />
			</div>
		</div>
	);
}
