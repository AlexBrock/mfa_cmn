import React 			from 'react';
import ReactDOM 		from 'react-dom';

import Card from './components/Card.jsx';


export default class Main extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="main">
				<h1 className="main-title">MFA CMN</h1>
				<Card/>
			</div>
		);
	}
}

document.addEventListener( "DOMContentLoaded", 
	function() {
		var	elem	=	ReactDOM.render(
							<Main />
						,	document.getElementById( 'main' )
						);
	}
);