/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 21:30:39
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 21:38:12
 */
import React from 'react';

export default class FooterForm extends React.Component {
	state = {
		name: '',
		email: '',
		message: ''
	};

	render() {
		return (
			<form
				action="#"
				method="post"
				name="contact"
				className="footer-form"
				data-netlify="true">
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Name"
					value={this.state.name}
					className="footer-form__input"
					onChange={e => this.setState({ name: e.target.value })}
				/>

				<input
					id="email"
					name="email"
					type="email"
					className="footer-form__input"
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					placeholder="Email address"
				/>

				<textarea
					id="message"
					name="message"
					className="footer-form__input footer-form__textarea"
					value={this.state.message}
					onChange={e => this.setState({ message: e.target.value })}
					placeholder="Your message"
				/>

				<button type="submit" className="footer-form__button">
					Submit
				</button>
			</form>
		);
	}
}
