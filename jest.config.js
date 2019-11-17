'use strict';

module.exports = {
	collectCoverageFrom: ['**/*.{js,jsx,mjs}'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/config',
		'<rootDir>/jest.config.js',
		'<rootDir>/gatsby-browser.js',
		'<rootDir>/gatsby-config.js',
		'<rootDir>/gatsby-node.js',
		'<rootDir>/gatsby-ssr.js',
		'<rootDir>/.cache/',
		'<rootDir>/coverage/',
		'<rootDir>/public/'
	],
	globals: {
		__PATH_PREFIX__: ''
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/fileMock.js'
	},
	setupFiles: ['<rootDir>/config/setup.js'],
	testEnvironment: 'node',
	testURL: 'http://localhost',
	testPathIgnorePatterns: ['node_modules', '.cache'],
	transform: {
		'^.+\\.(js|jsx|mjs)$': '<rootDir>/config/preprocess.js'
	},
	transformIgnorePatterns: ['node_modules/(?!(gatsby)/)']
};
