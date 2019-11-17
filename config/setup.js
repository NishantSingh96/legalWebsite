'use strict';

global.___loader = {
	enqueue: jest.fn()
};

global.requestAnimationFrame = callback => {
	setTimeout(callback, 0);
};

// Enzyme adapter configuration
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
