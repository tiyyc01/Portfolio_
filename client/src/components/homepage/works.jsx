import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								// src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">TCS</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							{/* <img
								// src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Triculin Technologies</div>
							<div className="work-subtitle">
								Developer
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
