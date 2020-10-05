// const div = document.getElementById('text');
// let age = parseInt(prompt('Enter your age: '));
// let number = parseInt(prompt('Enter your number: '));
// let grade = parseInt(prompt('Enter your grade: '));

// if (age > 17) {
// 	// document.body.innerHTML = '<h1>You are old enough to drive!</h1>';
// 	div.innerText = 'You are old enough to drive!';
// 	console.log('You are old enough to drive!');
// } else {
// 	div.innerText = `You are left with ${
// 		18 - age
// 	} years to drive`;
// 	console.log(`You are left with ${18 - age} years to drive`);
// }

// if (age > 30) {
// 	div.innerText = `You are ${age - 30} years older than me`;
// } else {
// 	if (age === 30) {
// 		div.innerText = `You are same age as me`;
// 	} else {
// 		div.innerText = `You are ${30 - age} years younger than me`;
// 	}
// }

// if (number % 2 === 0) {
// 	div.innerText = `${number} is an even number`;
// } else {
// 	div.innerText = `${number} is an odd number`;
// }

// if (grade >= 80 && grade <= 100) {
// 	div.innerText = 'A';
// } else {
// 	if (grade >= 70 && grade <= 89) {
// 		div.innerText = 'B';
// 	} else {
// 		if (grade >= 60 && grade <= 69) {
// 			div.innerText = 'C';
// 		} else {
// 			if (grade >= 50 && grade <= 59) {
// 				div.innerText = 'D';
// 			} else {
// 				if (grade >= 0 && grade <= 49) {
// 					div.innerText = 'F';
// 				} else {
// 					if (grade < 0) {
// 						div.innerText = 'Grade must be positive';
// 					} else {
// 						div.innerText = 'Grade must be less than 100';
// 					}
// 				}
// 			}
// 		}
// 	}
// }

const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: 'asab@asab.com',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'Redux',
			'MongoDB',
			'Express',
			'React',
			'Node',
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: 'paul@paul.com',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'MongoDB',
			'Express',
			'React',
			'Node',
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};

let len = 0;
let user = '';
let point = 0;
let count = 0;
let userSkill = [];
for (const key in users) {
	if (users[key].skills.length > len) {
		len = users[key].skills.length;
		user = key;
	}

	if (
		users[key].skills.includes('Node') &&
		users[key].skills.includes('React') &&
		users[key].skills.includes('MongoDB') &&
		users[key].skills.includes('Express')
	) {
		userSkill.push(key);
	}

	if (users[key].points >= 50) {
		point++;
	}
	count++;
}

const ngoy = Object.assign({}, users);

ngoy.name = {
	email: 'dngoyb@gmail.com',
	skills: ['HTML', 'CSS', 'JS'],
	age: 35,
	isLoggedIn: true,
	points: 54,
};

console.log(users);

// console.log(user, `Has ${len} skills`);
// console.log(point, 'users have more than 50 points from ', count);
console.log(userSkill);
