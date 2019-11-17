/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 16:00:52
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 16:43:21
 */
import React from 'react';
import { bool as booleanProp } from 'prop-types';

import HomeUserProgress from './HomeUserProgress';

const ACHIEVEMENTS = [
	{ title: 'Graphic Design', value: 66 },
	{ title: 'Node.JS', value: 80 },
	{ title: 'ReactJS', value: 77.5 },
	{ title: 'React Native', value: 77.5 },
	{ title: 'Python', value: 50 },
	{ title: 'PHP', value: 70 },
	{ title: 'Android', value: 50 },
	{ title: 'AngularJS', value: 55 },
	{ title: 'Ionic', value: 50 },
	{ title: 'Flutter', value: 45 },
	{ title: 'Electron', value: 60 }
];

export default function HomeUserAchievements({ isVisible }) {
	return ACHIEVEMENTS.map(({ title, value }, index) => (
		<HomeUserProgress
			isVisible={isVisible}
			key={index}
			title={title}
			value={value}
			delay={index * 100}
		/>
	));
}

HomeUserAchievements.propTypes = {
	isVisible: booleanProp
};
