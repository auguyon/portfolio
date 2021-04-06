import React from "react";
import data from "./data.json";

function RoundedSkill({ title }) {
	return <div class='flex bg-red-400 rounded-full py-2 px-4 m-1'>{title}</div>;
}

function Title({ title }) {
	return <div class='text-4xl text-gray-900'>{title}</div>;
}

function Skills() {
	return (
		<div id='skills_id' class='h-auto w-full flex bg-gray-100'>
			<div class='h-auto flex-1 flex-col justify-around py-10 px-8'>
				<div class='flex flex-col mb-4'>
					<Title title='Skills' />
					<div class='grid grid-cols-3 ml-2 mt-2'>
						<RoundedSkill title='React' />
						<RoundedSkill title='React-Native' />
						<RoundedSkill title='AWS serverless' />
						<RoundedSkill title='DB NoSQL' />
					</div>
				</div>
				<div class='flex flex-col'>
					<Title title='Langues' />
					<div class='grid grid-cols-1 ml-2 mt-2'>
						<RoundedSkill title='Français - Natal' />
						<RoundedSkill title='Anglais - B2' />
						<RoundedSkill title='Espagnol - Débutant' />
					</div>
				</div>
			</div>
			<div class='h-auto flex-1 py-10 px-8 justify-around bg-gray-200'>
				<div class='flex flex-col mb-4'>
					<Title title='Outils' />
					<div class='flex flex-col ml-2 mt-2'>
						<div>Visual Studio Code</div>
						<div>Xcode</div>
						<div>Android Studio</div>
						<div>Mac, Linux et Windows</div>
						<div>Git</div>
						<div>MS Office</div>
						<div></div>
					</div>
				</div>
				<div class='flex flex-col'>
					<Title title='Savoir-Etre' />
					<div class='flex flex-col ml-2 mt-2'>
						<div>Rigoureux</div>
						<div>Curieux</div>
						<div>Passionné</div>
						<div>Pro-actif</div>
						<div>Autonome</div>
						<div>Adaptable</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
