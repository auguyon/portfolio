import React from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Educations from "./pages/Educations";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<div class='h-auto w-full'>
				<Home />
				<AboutMe />
				<Educations />
				<Skills />
				<Contact />
			</div>
		</>
	);
}

export default App;
