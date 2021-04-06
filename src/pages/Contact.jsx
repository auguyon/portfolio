import React from "react";
import data from "./data.json";
function Contact() {
	return (
		<div
			id='contact_id'
			class='h-auto w-full flex flex-col justify-end items-center py-10 px-8 bg-yellow-500'
		>
			{data.text}
		</div>
	);
}

export default Contact;
