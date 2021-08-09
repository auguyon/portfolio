import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { t } from '@lingui/macro';
import { Colors } from '../constants/Colors';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as InternIcon } from '../assets/icons/internship.svg';

function ResumeItem({ date, backgroundColor, arrowColor, mainColor, icon, title, city, desc }) {
	return (
		<VerticalTimelineElement
			className='vertical-timeline-element--work'
			contentStyle={{
				background: backgroundColor,
				color: '#000',
				border: `10px solid ${mainColor}`,
			}}
			contentArrowStyle={{ borderRight: `10px solid ${arrowColor}` }}
			date={date}
			iconStyle={{ background: mainColor, color: '#000' }}
			icon={icon}
		>
			<h3 className='vertical-timeline-element-title'>{title}</h3>
			<h4 className='vertical-timeline-element-subtitle'>{city}</h4>
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
		<div className='h-auto w-full flex py-10 px-8 bg-primary'>
			<VerticalTimeline>
				<ResumeItem
					date={t`date resume 5`}
					icon={<InternIcon />}
					title={t`title resume 5`}
					city='Remote / Paris - France'
					desc={t`desc resume 5`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={internshipColor}
				/>
				<ResumeItem
					date={t`date resume 4`}
					icon={<InternIcon />}
					title={t`title resume 4`}
					city='Gardanne - France'
					desc={t`desc resume 4`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={internshipColor}
				/>
				<ResumeItem
					date={t`date resume 3`}
					icon={<WorkIcon />}
					title={t`title resume 3`}
					city='Caen - France'
					desc={t`desc resume 3`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={workColor}
				/>
				<ResumeItem
					date={t`date resume 2`}
					icon={<SchoolIcon />}
					title={t`title resume 2`}
					city='Paris - France'
					desc={t`desc resume 2`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={schoolColor}
				/>
				<ResumeItem
					date={t`date resume 1`}
					icon={<WorkIcon />}
					title={t`title resume 1`}
					city='Caen - France'
					desc={t`desc resume 1`}
					backgroundColor={backgroundColor}
					arrowColor={backgroundColor}
					mainColor={workColor}
				/>
			</VerticalTimeline>
		</div>
	);
}

export default Educations;
