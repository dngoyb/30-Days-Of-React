// index.js
import React from 'react';
import ReactDOM from 'react-dom';
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg';

const Image = () => (
	<div>
		<img src={asabenehImage} alt='my personal' />
		<h3>Ngoy Banza</h3>
		<small>Junior Developer, South Africa</small>
	</div>
);

const Skills = () => (
	<div>
		<h2>Skills</h2>
		<ul className='skills'>
			<li>
				<a href='#'>CSS </a>
			</li>
			<li>
				<a href='#'>HTML</a>
			</li>
			<li>
				<a href='#'>Sass</a>
			</li>
			<li>
				<a href='#'>JS</a>
			</li>
			<li>
				<a href='#'>React</a>
			</li>
			<li>
				<a href='#'>Redux</a>
			</li>
			<li>
				<a href='#'>Node</a>
			</li>
			<li>
				<a href='#'>MongoDB</a>
			</li>
			<li>
				<a href='#'>Python</a>
			</li>
			<li>
				<a href='#'>Flask</a>
			</li>
			<li>
				<a href='#'>Django</a>
			</li>
			<li>
				<a href='#'>MySQL</a>
			</li>
			<li>
				<a href='#'>GraphQl</a>
			</li>
			<li>
				<a href='#'>React</a>
			</li>
			<li>
				<a href='#'>Redux</a>
			</li>
			<li>
				<a href='#'>Node</a>
			</li>
			<li>
				<a href='#'>MongoDB</a>
			</li>
			<li>
				<a href='#'>Python</a>
			</li>
			<li>
				<a href='#'>Flask</a>
			</li>
			<li>
				<a href='#'>Django</a>
			</li>
			<li>
				<a href='#'>MySQL</a>
			</li>
			<li>
				<a href='#'>GraphQl</a>
			</li>
		</ul>
	</div>
);

const Footer = () => (
	<footer>
		<small>Joined on Aug 30, 2020</small>
	</footer>
);

const App = () => (
	<div className='app'>
		<Image />
		<Skills />
		<Footer />
	</div>
);
ReactDOM.render(<App />, document.getElementById('root'));
