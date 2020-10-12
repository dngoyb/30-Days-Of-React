// index.js
import React from 'react';
import ReactDOM from 'react-dom';
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg';

const Image = (
	<div>
		<img src={asabenehImage} alt='my personal' />
		<h3>Ngoy Banza</h3>
		<small>Junior Developer, South Africa</small>
	</div>
);

const skills = (
	<div>
		<h2>Skills</h2>
		<ul className='skills'>
			<li>
				<a>CSS </a>
			</li>
			<li>
				<a>HTML</a>
			</li>
			<li>
				<a>Sass</a>
			</li>
			<li>
				<a>JS</a>
			</li>
			<li>
				<a>React</a>
			</li>
			<li>
				<a>Redux</a>
			</li>
			<li>
				<a>Node</a>
			</li>
			<li>
				<a>MongoDB</a>
			</li>
			<li>
				<a>Python</a>
			</li>
			<li>
				<a>Flask</a>
			</li>
			<li>
				<a>Django</a>
			</li>
			<li>
				<a>MySQL</a>
			</li>
			<li>
				<a>GraphQl</a>
			</li>
			<li>
				<a>React</a>
			</li>
			<li>
				<a>Redux</a>
			</li>
			<li>
				<a>Node</a>
			</li>
			<li>
				<a>MongoDB</a>
			</li>
			<li>
				<a>Python</a>
			</li>
			<li>
				<a>Flask</a>
			</li>
			<li>
				<a>Django</a>
			</li>
			<li>
				<a>MySQL</a>
			</li>
			<li>
				<a>GraphQl</a>
			</li>
		</ul>
	</div>
);

const footer = (
	<footer>
		<small>Joined on Aug 30, 2020</small>
	</footer>
);

const app = (
	<div className='app'>
		{Image}
		{skills}
		{footer}
	</div>
);
ReactDOM.render(app, document.getElementById('root'));
