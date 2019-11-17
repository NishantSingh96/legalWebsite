/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-28 22:17:53
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-28 22:19:50
 */
import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Footer from '../Footer';

describe('Component Testing', () => {
	const component = <Footer />;

	test('renders without crashing', () => {
		const wrapper = shallow(component);
		expect(wrapper.exists()).toBeTruthy();
	});

	test('matches snapshot', () => {
		const snapshot = create(component).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
});
