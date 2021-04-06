import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../assets/icons/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/icons/school.svg";
// import WorkIcon from "../assets/icons/school";

function ResumeItem({ date, icon, title, city, desc }) {
	return (
		<VerticalTimelineElement
			className='vertical-timeline-element--work'
			contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
			contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
			date={date}
			iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
			icon={icon}
		>
			<h3 className='vertical-timeline-element-title'>{title}</h3>
			<h4 className='vertical-timeline-element-subtitle'>{city}</h4>
			<p>{desc}</p>
		</VerticalTimelineElement>
	);
}

function Educations() {
	return (
		<div class='h-auto w-full flex py-10 px-8 bg-green-500'>
			<VerticalTimeline>
				<ResumeItem
					date='09/20 - 03/21'
					icon={<WorkIcon />}
					title='Full-Stack developer intern'
					city='Gardanne 13105 - France'
					desc='Spearheaded a mobile app with React-Native and AWS serverless structure, and was the sole person responsible for its stack and development.Created two showcase websites, uploaded with AWS Amplify.'
				/>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date='2011 - present'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Creative Director</h3>
					<h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
					<p>
						Creative Direction, User Experience, Visual Design, Project Management, Team
						Leading
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='2010 - 2011'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Art Director</h3>
					<h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='2008 - 2010'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Web Designer</h3>
					<h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='2006 - 2008'
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>Web Designer</h3>
					<h4 className='vertical-timeline-element-subtitle'>San Francisco, CA</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='April 2013'
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#000" }}
					icon={<WorkIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						Content Marketing for Web, Mobile and Social Media
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
					<p>Strategy, Social Media</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Educations;
