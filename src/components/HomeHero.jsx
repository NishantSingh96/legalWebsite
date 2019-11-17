/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 13:09:47
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-28 17:02:27
 */
import React from 'react';
import Particles from 'react-particles-js';
import { scroller } from 'react-scroll';

const PARTICLE_PARAMS = {
	particles: {
		number: {
			value: 160,
			density: { enable: false }
		},
		size: {
			value: 3,
			random: true,
			anim: { speed: 4, size_min: 0.3 }
		},
		line_linked: { enable: false },
		move: {
			random: true,
			speed: 1,
			direction: 'top',
			out_mode: 'out'
		}
	},
	interactivity: {
		events: {
			onhover: { enable: true, mode: 'bubble' },
			onclick: { enable: true, mode: 'repulse' }
		},
		modes: {
			bubble: { distance: 250, duration: 2, size: 0, opacity: 0 },
			repulse: { distance: 400, duration: 4 }
		}
	}
};

const HomeHero = () => {
	const scrollToAbout = () => {
		scroller.scrollTo('home-about', {
			duration: 1500,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	};

	return (
		<header className="home-hero">
			<Particles params={PARTICLE_PARAMS} className="home-hero__particles" />

			<div className="home-hero__inner">
				<h1 className="home-hero__title">
					Hi. I&apos;m <span className="home-hero__name">Dharmendra Singh</span>
					<br />
					I&apos;m a proficient in various legal services.
					<br />
					I have more than <span className="home-hero__name">15 years</span> of exprience in this field.
				</h1>

				<button className="home-hero__button" onClick={scrollToAbout}>
					<span className="home-hero__button-text">Let&apos;s take a tour</span>
					<i className="home-hero__button-icon ti-arrow-right" />
				</button>
			</div>
		</header>
	);
};

export default React.memo(HomeHero);
