import React from 'react';
import ReactDOM from 'react-dom';

const Form = () => (
	<div>
		<h1>Subscribe</h1>
		<p>sign up with your email address to receive news and updates</p>
		<form>
			<input type='text' placeholder='First name' />
			<input type='text' placeholder='Last name' />
			<input type='email' placeholder='Email' />
		</form>
		<button>Subscribe</button>
	</div>
);

ReactDOM.render(<Form />, document.getElementById('root'));
