import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link, animateScroll as scroll } from "react-scroll";
import home from "../assets/icons/home.svg";

function LinkToPages({ title, id }) {
	return (
		<Link activeClass='active' to={id} spy={true} smooth={true} offset={-65.8} duration={500}>
			{title}
		</Link>
	);
}

function Navbar() {
	const [selected, setSelected] = useState("FR");

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div class='fixed z-10 top-0 left-0 w-full shadow-md flex flex-row justify-between items-center py-3 px-4 bg-gray-400'>
			<img src={home} style={{ height: 40, width: 40 }} alt='Logo' onClick={scrollToTop} />
			<div class='flex flex-row justify-end items-center space-x-3'>
				<LinkToPages title='Home' id='home_id' />
				<LinkToPages title='About me' id='aboutMe_id' />
				<LinkToPages title='Educations' id='educations_id' />
				<LinkToPages title='Competences' id='skills_id' />
				<LinkToPages title='Contact' id='contact_id' />
				<ReactFlagsSelect
					selected={selected}
					onSelect={(code) => setSelected(code)}
					countries={["US", "FR"]}
					customLabels={{ US: "US", FR: "FR" }}
					placeholder=''
					showSelectedLabel={false}
					showOptionLabel={false}
					selectedSize={14}
				/>
			</div>
		</div>
	);
}

export default Navbar;
