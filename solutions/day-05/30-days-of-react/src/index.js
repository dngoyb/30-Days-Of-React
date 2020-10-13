import React from 'react';
import ReactDOM from 'react-dom';
import css_logo from './images/css_logo.png';
import html_logo from './images/html_logo.png';
import react_logo from './images/react_logo.png';

const rootElement = document.getElementById('root');

const Header = (props) => {
	const data = props.data;
	return (
		<header className='header'>
			<h3>{data.title}</h3>
			<div className='header-img'>
				<img src={css_logo} alt='css logo' />
				<img src={html_logo} alt='html logo' />
				<img src={react_logo} alt='react logo' />
			</div>
		</header>
	);
};

const App = () => {
	const data = {
		title: 'Front End Technologies',
	};
	return <Header data={data} />;
};

ReactDOM.render(<App />, rootElement);
