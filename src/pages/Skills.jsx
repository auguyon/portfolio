import React from 'react';
import { t } from '@lingui/macro';

import { ReactComponent as PencilIcon } from '../assets/icons/pencil.svg';
import { ReactComponent as SkillsIcon } from '../assets/icons/skills.svg';
import { ReactComponent as ToolBoxIcon } from '../assets/icons/tool-box.svg';
import { ReactComponent as WorldIcon } from '../assets/icons/worldwide.svg';

function RoundedSkill({ title, backgroundColor }) {
	return (
		<div className={['rounded-full py-2 px-4 m-1', backgroundColor].join(' ')} key={title}>
			{title}
		</div>
	);
}

function Title({ icon, title }) {
	return (
		<div className="flex flex-row items-center mb-5 text-3xl text-gray-800">
			{icon}
			{title}
		</div>
	);
}

function DisplayRoundedItems({ icon, title, items, backgroundColor }) {
	return (
		<div className="flex flex-col mb-12">
			<Title icon={icon} title={title} />
			<div className="h-auto w-full grid grid-cols-3 gap-2">
				{items.map((item, index) => (
					<RoundedSkill title={item} backgroundColor={backgroundColor} key={index} />
				))}
			</div>
		</div>
	);
}

export default function Skills() {
	const skillItems = ['ReactJS', 'NodeJS', 'React-Native', 'Python', 'AWS Serverless'];
	const languagesItems = [t`French skill`, t`English skill`];
	const toolsItems = [
		'Visual Studio Code',
		'Android Studio',
		'Git',
		'Gitlab',
		'Mac, Linux, Windows',
		'MS Office',
	];
	const softSkillsItems = [t`Curious`, t`Thorough`, t`Passionate`, t`Motivated`];

	return (
		<div className="h-auto w-full flex">
			<div className="h-auto flex-1 flex-col justify-between py-10 px-8 bg-primary">
				<DisplayRoundedItems
					icon={<PencilIcon className="mr-4" height="30" width="30" />}
					title={t`Skills`}
					items={skillItems}
					backgroundColor="bg-primaryOrange"
				/>
				<DisplayRoundedItems
					icon={<ToolBoxIcon className="mr-4" height="30" width="30" />}
					title={t`tools`}
					items={toolsItems}
					backgroundColor="bg-primaryOrange"
				/>
			</div>
			<div className="h-auto flex-1 flex-col justify-between py-10 px-8 bg-primaryOrange">
				<DisplayRoundedItems
					icon={<SkillsIcon className="mr-4" height="30" width="30" />}
					title={t`soft skills`}
					items={softSkillsItems}
					backgroundColor="bg-primary"
				/>
				<DisplayRoundedItems
					icon={<WorldIcon className="mr-4" height="30" width="30" />}
					title={t`language skills`}
					items={languagesItems}
					backgroundColor="bg-primary"
				/>
			</div>
		</div>
	);
}
