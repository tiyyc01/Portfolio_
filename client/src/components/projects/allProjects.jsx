import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			<h2 className="projects-title">Projects</h2>
			<p className="projects-subtitle">
				Here are some of the projects I have worked on, implementing full-stack development solutions.
			</p>

			<div className="projects-grid">
				{INFO.projects.map((project, index) => (
					<Project
						key={index}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
};

export default AllProjects;
