/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 14:06:02
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-24 00:19:44
 */
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const imgQueries = graphql`
	query {
		frontendImg: file(relativePath: { eq: "desktop-computer.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
		backendImg: file(relativePath: { eq: "cloud-server.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
		mobileImg: file(relativePath: { eq: "smartphone.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
		cleanCodeImg: file(relativePath: { eq: "clean-code.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default function HomeAboutSection() {
	return (
		<StaticQuery
			query={imgQueries}
			render={data => {
				const sections = [
					{
						title: 'Property Registration',
						desc:
							'I have ample expreince in handling registraion process for various types of lands, aprtments, flats, malls and have done more than 1000 registration',
						img: data.frontendImg
					},
					{
						title: 'Leave & License(Lease/Rent Agreement)',
						desc:
							'I have handled more than 3000 lease agreement registrations and very familiar with the process ',
						img: data.backendImg
					},
					{
						title: 'Convence',
						desc:
							'I have ample expreince in handling covence process',
						img: data.mobileImg
					},
					{
						title: 'Clean code OCD patient',
						desc:
							'Prefer to follow the software development lifecycle meticulously, not forgetting sections such as documentation and testing. 🤒',
						img: data.cleanCodeImg
					}
				];

				return (
					<React.Fragment>
						{sections.map((section, index) => (
							<div className="home-about-section column" key={`about-${index}`}>
								<div className="about-section__img">
									<Image
										alt={section.title}
										fluid={section.img.childImageSharp.fluid}
									/>
								</div>
								<p className="about-section__title">{section.title}</p>
								<p className="about-section__desc">{section.desc}</p>
							</div>
						))}
					</React.Fragment>
				);
			}}
		/>
	);
}
