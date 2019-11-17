module.exports = {
	siteMetadata: {
		title: 'Kenneth Kwakye-Gyamfi | Senior Mobile & Web Full Stack Developer',
		description:
			'Hello. My name is Kenneth. I am a mobile + web developer currently based in Accra, Ghana and working for getINNOtized GmbH',
		author: 'Kenneth Kwakye-Gyamfi',
		image: '/favicon.jpg',
		social: {
			twitter: '@cross19xx',
			fbAppId: '100009436144652'
		},
		socialUrls: [
			{
				url: 'https://www.facebook.com/profile.php?id=100009436144652',
				className: 'fab fa-facebook',
				containerClass: 'facebook'
			},
			{
				url: 'https://www.github.com/cr05s19xx',
				className: 'fab fa-github',
				containerClass: 'github'
			},
			{
				url: 'https://www.twitter.com/cross19xx',
				className: 'fab fa-twitter',
				containerClass: 'twitter'
			},
			{
				url: 'https://www.instagram.com/kenneth_kwakyegyamfi/',
				className: 'fab fa-instagram',
				containerClass: 'instagram'
			},
			{
				url: 'https://www.linkedin.com/in/kenneth-kwakye-gyamfi/',
				className: 'fab fa-linkedin',
				containerClass: 'linkedin'
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/img`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Kenneth Kwakye-Gyamfi',
				short_name: 'KKG',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#FFFFFF',
				display: 'minimal-ui',
				icon: 'src/img/logo.jpg' // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-138977349-1'
			}
		}
	]
};
