/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 12:45:13
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-28 17:15:07
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../css/global.min.css';

const pageQuery = graphql`
	{
		site {
			siteMetadata {
				title
				description
				author
				image
				social {
					twitter
					fbAppId
				}
			}
		}
	}
`;

/**
 * Layout page
 * Helps to default and/or attach SEO properties such as title, description, image, etc.
 *
 * @param {Object} props
 * @arg {string} [props.title]
 * @arg {string} [props.description]
 * @arg {string} [props.image]
 * @arg {string} [props.path]
 */
const Layout = props => (
	<StaticQuery
		query={pageQuery}
		render={({ site: { siteMetadata: seo } }) => {
			const title = props.title || seo.title;
			const description = props.description || seo.description;
			const image = props.image || seo.image;

			const meta = [
				{
					name: 'google-site-verification',
					content: 'vaxJ0jcuzGO9aicclUEDRPjgOVxvUAiza99Xs7uIdPc'
				},
				{ name: 'description', content: description },
				{ name: 'og:url', content: props.path || '/' },
				{ name: 'og:title', content: title },
				{ name: 'og:description', content: description },
				{ name: 'og:image', content: '/img/logo.jpg' },
				{ name: 'fb:app_id', content: seo.social.fbAppId },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:creator', content: seo.social.twitter },
				{ name: 'twitter:title', content: title },
				{ name: 'twitter:description', content: description },
				{ name: 'twitter:image', content: image }
			];

			return (
				<React.Fragment>
					<Helmet>
						<title>{title}</title>
						{meta.map(({ name, content }, index) => (
							<meta key={index} name={name} content={content} />
						))}
						<title>{title}</title>
						{typeof props.canonicalUrl !== 'undefined' && (
							<link
								rel="canonical"
								href={`https://kwakye-gyamfi.com${props.canonicalUrl}`}
							/>
						)}
					</Helmet>

					<div className={props.className}>{props.children}</div>
				</React.Fragment>
			);
		}}
	/>
);

Layout.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	path: PropTypes.string,
	canonicalUrl: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};

Layout.defaultProps = {
	className: 'cross-site'
};

export default Layout;
