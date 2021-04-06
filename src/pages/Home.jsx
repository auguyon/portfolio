import React from "react";

import workspace from "../assets/photos/workspace.png";
import { ReactComponent as LogoAG } from "../assets/icons/ag.svg";

function Home() {
	return (
		<div class='h-screen w-full flex flex-col justify-between bg-primary'>
			<div class='w-full h-auto flex flex-row justify-between items-center p-6'>
				<LogoAG height='90' width='90' />
				{/* <div>Contact</div> */}
			</div>
			<div class='h-auto w-full flex flex-col justify-end items-center'>
				<div>Aurelien Guyon</div>
				<div>Full-stack developer</div>
				<img src={workspace} class='h-32' alt='workspace aurelien guyon' />
			</div>
		</div>
	);
}

export default Home;
