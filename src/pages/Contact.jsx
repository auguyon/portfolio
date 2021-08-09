import React from 'react';
import { t } from '@lingui/macro';

import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as SmartphoneIcon } from '../assets/icons/smartphone.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/linkedin.svg';

function ContactItem({ icon, titre }) {
	return (
		<div className='flex flex-1 flex-row justify-center items-center ml-2'>
			{icon}
			{titre}
		</div>
	);
}

function ContactLink({ link, icon, titre }) {
	return (
		<a
			className='flex flex-1 flex-row justify-center items-center ml-2'
			href={link}
			target='_blank'
		>
			{icon}
			{titre}
		</a>
	);
}

export default function Contact() {
	return (
		<div className='h-auto w-full flex flex-wrap flex-row justify-evenly items-center p-8 bg-primaryRed'>
			<ContactItem
				icon={<LocationIcon className='mx-3' height='25' width='25' />}
				titre='France'
			/>
			<ContactItem
				icon={<MailIcon className='mx-3' height='30' width='30' />}
				titre='aurelienguyon11@gmail.com'
			/>
			<ContactItem
				icon={<SmartphoneIcon className='mx-3' height='30' width='30' />}
				titre={t`Phone`}
			/>
			<ContactLink
				link='https://github.com/auguyon'
				icon={<GithubIcon className='mx-3' height='25' width='25' />}
				titre='auguyon'
			/>
			<ContactLink
				link='https://www.linkedin.com/in/auguyon/'
				icon={<LinkedinIcon className='mx-3' height='28' width='28' />}
				titre='in/auguyon'
			/>
		</div>
	);
}
