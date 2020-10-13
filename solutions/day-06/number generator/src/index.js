import React from 'react';
import ReactDOM from 'react-dom';

const Numbers = ({ numbers }) => {
	const list = numbers.map((num) => {
		let bg = '';

		let bool = false;

		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				bool = true;
			}
		}
		if (bool === false && num !== 1 && num !== 0) {
			bg = 'brown';
		} else if (num % 2 === 0) {
			bg = 'green';
		} else {
			bg = 'yellow';
		}
		return (
			<li key={num} className={bg}>
				{num}
			</li>
		);
	});
	return list;
};

let numberArr = (number) => {
	let arr = [];
	for (let i = 0; i <= number; i++) {
		arr.push(i);
	}
	return arr;
};

const Titles = (props) => {
	const data = props.data;
	return (
		<div className='titles'>
			<h1>{data.title}</h1>
			<h3>{data.subtitle}</h3>
		</div>
	);
};

const App = () => {
	const data = {
		title: '30 Days Of React',
		subtitle: 'Number Generator',
	};
	const numbers = numberArr(31);
	return (
		<div className='app'>
			<Titles data={data} />
			<ul>
				<Numbers numbers={numbers} />
			</ul>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
