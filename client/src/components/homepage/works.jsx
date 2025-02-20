import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<h2 className="projects-title">Work Experience</h2>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">TCS</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							<div className="work-title">Triculin Technologies</div>
							<div className="work-subtitle">
								Software Developer
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
