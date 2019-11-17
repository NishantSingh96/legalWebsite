/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 17:30:07
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-28 17:28:15
 */
import React from 'react';

const projects = [
	{
		id: 1,
		name: 'Prestige Capital',
		description:
			'Member of the team of developers for the development of the Prestige Capital GH website',
		type: 'Web',
		img: '/img/prestige-capital.webp',
		url: 'https://www.prestigecapitalgh.com'
	},
	{
		id: 2,
		name: 'Yakɔkoe',
		type: 'Mobile',
		description: 'Pollution detection and Air Quality Index calculator',
		img: '/img/yakokoe.webp',
		url: 'https://play.google.com/store/apps/details?id=com.cleanairghana.yakokoe&hl=en'
	},
	{
		id: 3,
		name: 'TICKETHOUSE Ghana',
		type: 'Website + Mobile',
		description: "v2.0 of Ghana's State of the art online ticketing system.",
		img: '/img/tickethouse-old.webp',
		inProgress: true,
		url: 'https://www.tickethousegh.com'
	}
];

function HomeProjects() {
	const renderProjects = () => {
		return projects.map(project => (
			<div
				key={project.id}
				className="home-project"
				style={{ backgroundImage: `url(${project.img})` }}>
				{project.inProgress && (
					<span
						className="home-project__ip"
						title="This project is currently being developed">
						In progress
					</span>
				)}

				<div className="home-project__inner">
					<p className="home-project__title">{project.name}</p>
					<p className="home-project__type">{project.type}</p>
					<p className="home-project__desc">{project.description}</p>

					<a
						target="_blank"
						href={project.url}
						rel="noopener noreferrer"
						className="home-project__learn">
						Learn more
					</a>
				</div>
			</div>
		));
	};

	return (
		<div className="home-projects">
			<div className="grid pad-grid">
				<h2 className="home-projects__title">Stuff I&apos;ve worked on</h2>
				<p className="home-projects__subtitle">
					These are the things I&apos;ve worked on. They are the things I did as a
					freelancer (i.e. I was not employed under any of the companies I have worked
					for)
				</p>

				<div className="home-projects__container">{renderProjects()}</div>
			</div>
		</div>
	);
}

export default React.memo(HomeProjects);
