import React from "react";
import profile from "../assets/photos/profile.jpeg";
import data from "./data.json";
function AboutMe() {
	return (
		<div
			id='aboutMe_id'
			class='h-auto w-full flex flex-row justify-center items-center py-10 px-8 bg-red-400'
		>
			<div>{data.text}</div>
			<img src={profile} alt='photo de profile' class='rounded-full' />
		</div>
	);
}

export default AboutMe;
