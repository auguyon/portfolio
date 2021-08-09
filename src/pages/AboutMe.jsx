import React from 'react';
import { Trans, t } from '@lingui/macro';

import HorizontalLine from '../components/HorizontalLine';
import profile from '../assets/photos/profile.jpeg';

function DisplayText({ title, text }) {
	return (
		<div className='h-auto w-full flex-1 flex-col p-6 px-20'>
			<div className='h-auto w-full flex justify-center text-2xl '>{title}</div>
			<HorizontalLine />
			<div className='h-auto w-full flex justify-center items-center text-justify'>
				{text}
			</div>
		</div>
	);
}

export default function AboutMe() {
	return (
		<div className='h-auto w-full flex flex-col justify-center items-center py-10 px-8 bg-primaryRed'>
			<img
				src={profile}
				alt='photo de profile'
				className='rounded-full'
				height='250'
				width='250'
			/>
			<div className='py-10 text-3xl'>
				<Trans>Welcome</Trans>
			</div>
			<div className='h-auto w-full flex flex-row justify-center items-start p-2 bg-primaryRed'>
				<DisplayText title={t`About Me`} text={t`About Me - Text`} />
				<DisplayText
					title={t`What I'm looking for`}
					text={t`What I'm looking for - Text`}
				/>
				<DisplayText title={t`My Goals`} text={t`My Goals - Text`} />
			</div>
		</div>
	);
}
