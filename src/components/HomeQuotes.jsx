/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 21:03:19
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 22:09:43
 */
import React from 'react';

const quotes = [
	{
		text: 'No price is too high to pay for the privilege of owning yourself',
		author: 'Friedrich Nietzsche'
	},
	{
		text: 'Whosoever desires constant success must change his conduct with the times',
		author: 'Niccolo Machiavelli'
	},
	{
		text: 'Great things are done by a series of small things brought together',
		author: 'Vincent Van Gogh'
	}
];

function HomeQuotes() {
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<div className="home-quote grid pad-grid">
			<p className="home-quote__title">{`"${quote.text}"`}</p>
			<p className="home-quote__quote">{quote.author}</p>
		</div>
	);
}

export default React.memo(HomeQuotes);
