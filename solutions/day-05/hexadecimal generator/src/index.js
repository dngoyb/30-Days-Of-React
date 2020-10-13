// index.js
import React from 'react';
import ReactDOM from 'react-dom';

const hexaColor = () => {
	let str = '0123456789abcdef';
	let color = '';
	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * str.length);
		color += str[index];
	}
	return '#' + color;
};

const HexaColor = () => {
	const bgColor = hexaColor();
	const styles = {
		height: '100px',
		display: 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		fontFamily: 'Montserrat',
		margin: '2px auto',
		borderRadius: '5px',
		width: '75%',
		border: '2px solid black',
		background: bgColor,
	};
	return (
		<div style={styles}>
			<h2>{bgColor}</h2>
		</div>
	);
};

// The App, or the parent or the container component
const App = () => (
	<div className='app'>
		<HexaColor />
		<HexaColor />
		<HexaColor />
		<HexaColor />
		<HexaColor />
		<HexaColor />
	</div>
);

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
