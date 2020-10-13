// index.js
import React from 'react';
import ReactDOM from 'react-dom';
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg';

const Image = (props) => {
	const data = props.data;
	return (
		<div>
			<img src={asabenehImage} alt='my personal' />
			<h3>{data.author}</h3>
			<small>{data.job}</small>
		</div>
	);
};

const Skills = (props) => (
	<div>
		<h2>{props.skillData}</h2>
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

const Footer = (props) => (
	<footer>
		<small>{props.footerData}</small>
	</footer>
);

const App = () => {
	const data = {
		author: 'Ngoy Banza',
		job: 'Junior Developer, South Africa',
	};

	const skillData = 'Skills';
	const footerData = 'Joined on Aug 30, 2020';

	return (
		<div className='app'>
			<Image data={data} />
			<Skills skillData={skillData} />
			<Footer footerData={footerData} />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById('root'));
