/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 15:44:09
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 15:54:12
 *
 * Renders all social links with the custom class names
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const componentQuery = graphql`
	{
		site {
			siteMetadata {
				socialUrls {
					url
					className
					containerClass
				}
			}
		}
	}
`;

export default function SocialLinks(props) {
	return (
		<StaticQuery
			query={componentQuery}
			render={({ site }) => {
				const {
					siteMetadata: { socialUrls }
				} = site;

				return (
					<div className={props.className}>
						{socialUrls.map(({ url, className, containerClass }, index) => (
							<a
								key={index}
								href={url}
								target="__blank"
								className={`social-link ${containerClass}`}>
								<i className={className} />
							</a>
						))}
					</div>
				);
			}}
		/>
	);
}

SocialLinks.propTypes = {
	className: PropTypes.string
};

SocialLinks.defaultProps = {
	className: 'social-link-container'
};
