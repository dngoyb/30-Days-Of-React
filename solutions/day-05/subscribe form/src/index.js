import React from 'react';
import ReactDOM from 'react-dom';

const Form = (props) => {
	const {
		title,
		subtitle,
		author: { firstNama, lastName },
		email,
	} = props.data;
	return (
		<div>
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<form>
				<input type='text' placeholder={firstNama} />
				<input type='text' placeholder={lastName} />
				<input type='email' placeholder={email} />
			</form>
			<button>Subscribe</button>
		</div>
	);
};

const App = () => {
	const data = {
		title: 'Subscribe',
		subtitle: 'sign up with your email address to receive news and updates',
		author: {
			firstNama: 'First name',
			lastName: 'Last name',
		},
		email: 'Email',
	};
	return <Form data={data} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
