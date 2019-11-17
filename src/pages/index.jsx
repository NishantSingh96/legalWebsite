/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 12:03:16
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-28 17:30:00
 */
import React from 'react';

import Footer from '../components/Footer';
import HomeAbout from '../components/HomeAbout';
import HomeHero from '../components/HomeHero';
import HomeProjects from '../components/HomeProjects';
import HomeQuotes from '../components/HomeQuotes';
import HomeUser from '../components/HomeUser';
import Layout from '../components/Layout';

import '../css/home.css';

export default function LandingPage() {
	return (
		<Layout className="home" canonicalUrl="">
			<HomeHero />
			<HomeAbout />
			<HomeUser />
			<HomeProjects />
			<HomeQuotes />
			<Footer />
		</Layout>
	);
}
