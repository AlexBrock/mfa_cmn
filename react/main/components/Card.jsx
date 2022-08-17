import React 			from 'react';
import ReactDOM 		from 'react-dom';

export default class Card extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<article className="mfa-card">
				<h1 className="mfa-card__title">mfa_cmn card</h1>
				<p className="mfa-card__info">This is a card from the mfa_cmn repo</p>
				<button className="mfa-card__cta">Button CTA</button>
			</article>
		);
	}
}