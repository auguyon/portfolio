import React from 'react';
import { t } from '@lingui/macro';

export default function Footer() {
	return (
		<div className='h-auto w-full flex justify-between items-center p-1 px-8 bg-primaryRed'>
			<div className='flex'>{t`Website made`}</div>
			<a
				className='flex'
				href='https://www.instagram.com/phanton_studio/?hl=fr'
				target='_blank'
			>{t`Logo Made`}</a>
		</div>
	);
}
