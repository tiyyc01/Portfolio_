import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({ logo, title, description, linkText, link }) => {
	const cleanDescription = description
		.trim()
		.split("\n")
		.filter(point => point.trim().length > 0);

	return (
		<div className="project-card">
			<div className="project-container">
				<div className="project-logo">
					<img src={logo} alt={`${title} logo`} />
				</div>

				<Link to={link} target="_blank" rel="noopener noreferrer" className="project-title">
					{title}
				</Link>

				<div className="project-description">
					<ul>
						{cleanDescription.map((point, index) => (
							<li key={index}>{point.replace("• ", "").trim()}</li>
						))}
					</ul>
				</div>

				<Link to={link} target="_blank" rel="noopener noreferrer" className="project-link">
					<FontAwesomeIcon icon={faExternalLinkAlt} className="project-link-icon" />
					<span>{linkText}</span>
				</Link>
			</div>
		</div>
	);
};

export default Project;
