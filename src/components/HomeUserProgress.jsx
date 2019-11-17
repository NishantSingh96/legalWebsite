/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 16:04:23
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 16:27:40
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function HomeUserProgress(props) {
	let value = props.isVisible ? props.value : 0;
	value += '%';

	const transitionDelay = `${props.delay}ms`;

	return (
		<div className="home-user-progress grid">
			<div className="home-user-progress__title column">{props.title}</div>
			<div className="home-user-progress__bar column grid">
				<div
					style={{ width: value, transitionDelay }}
					className="home-user-progress__bar-filled column"
				/>
				<p className="home-user-progress__bar-text column">{`${props.value}%`}</p>
			</div>
		</div>
	);
}

HomeUserProgress.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	delay: PropTypes.number,
	isVisible: PropTypes.bool
};

HomeUserProgress.defaultProps = {
	delay: 0,
	isVisible: false
};
