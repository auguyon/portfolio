import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { t } from '@lingui/macro';
import { Colors } from '../constants/Colors';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as InternIcon } from '../assets/icons/internship.svg';

import '../index.css';

function ResumeItem({ date, backgroundColor, arrowColor, mainColor, Icon, title, city, desc }) {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: backgroundColor,
				color: '#000',
				border: `10px solid ${mainColor}`,
			}}
			contentArrowStyle={{ borderRight: `10px solid ${arrowColor}` }}
			date={date}
			dateClassName="overrideDateClassName"
			iconStyle={{ background: mainColor, color: '#000' }}
			icon={<Icon style={{ height: 30, width: 30, left: '44%', top: '48%' }} />}
		>
			<h2>{title}</h2>
			<span>{city}</span>
			<p>{desc}</p>
		</VerticalTimelineElement>
	);
}

function Educations() {
	const backgroundColor = Colors.background;
	const schoolColor = Colors.primary;
	const workColor = Colors.secondary;
	const internshipColor = Colors.orange;

	return (
		<div className="h-auto w-full flex py-10 px-8 bg-primary">
			<VerticalTimeline>
				<ResumeItem
					date={t`date ubisoft`}
					Icon={InternIcon}
					title={t`title ubisoft`}
					city="Remote / Montreuil (93) - France"
					desc={t`desc ubisoft`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={internshipColor}
				/>
				<ResumeItem
					date={t`date alier`}
					Icon={InternIcon}
					title={t`title alier`}
					city="Remote / Paris (75) - France"
					desc={t`desc alier`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={internshipColor}
				/>
				<ResumeItem
					date={t`date tdf`}
					Icon={InternIcon}
					title={t`title tdf`}
					city="Gardanne (13) - France"
					desc={t`desc tdf`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={internshipColor}
				/>
				<ResumeItem
					date={t`date 42`}
					Icon={SchoolIcon}
					title={t`title 42`}
					city="Paris (75) - France"
					desc={t`desc 42`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={schoolColor}
				/>
				<ResumeItem
					date={t`date restauration`}
					Icon={WorkIcon}
					title={t`title restauration`}
					city="Caen (14) - France"
					desc={t`desc restauration`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={workColor}
				/>
			</VerticalTimeline>
		</div>
	);
}

export default Educations;
