const users = [
	{
		_id: 'ab12ex',
		username: 'Alex',
		email: 'alex@alex.com',
		password: '123123',
		createdAt: '08/01/2020 9:00 AM',
		isLoggedIn: false,
	},
	{
		_id: 'fg12cy',
		username: 'Asab',
		email: 'asab@asab.com',
		password: '123456',
		createdAt: '08/01/2020 9:30 AM',
		isLoggedIn: true,
	},
	{
		_id: 'zwf8md',
		username: 'Brook',
		email: 'brook@brook.com',
		password: '123111',
		createdAt: '08/01/2020 9:45 AM',
		isLoggedIn: true,
	},
	{
		_id: 'eefamr',
		username: 'Martha',
		email: 'martha@martha.com',
		password: '123222',
		createdAt: '08/01/2020 9:50 AM',
		isLoggedIn: false,
	},
	{
		_id: 'ghderc',
		username: 'Thomas',
		email: 'thomas@thomas.com',
		password: '123333',
		createdAt: '08/01/2020 10:00 AM',
		isLoggedIn: false,
	},
];

const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 },
		],
		likes: [],
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy'],
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy'],
	},
];

// {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt: '08/01/2020 10:00 AM',
//     isLoggedIn: false,
// }

const signup = () => {
	let bool = false;
	const obj = {
		_id: 'ghderc',
		username: 'Ngoy',
		email: 'thomas@thoma.com',
		password: '123333',
		createdAt: '08/01/2020 10:00 AM',
		isLoggedIn: false,
	};
	for (user of users) {
		if (obj.email === user.email) {
			bool = true;
		}
	}
	if (bool === false) {
		users.push(obj);
		console.log(obj.username, ' You have signed up');
	} else {
		console.log(obj.username, ' already has an account');
	}
};

const signIn = (obj) => {
	for (const user of users) {
		if (obj.username === user.username && obj.password === user.password) {
			return true;
		}
	}

	return 'User doesnt exist';
};

const rateProduct = () => {
	let rates = {};
	for (const user of users) {
		if (user.username === 'Martha') {
			rates = {
				userId: user._id,
				rate: 4.6,
			};
		}
	}
	for (const prod of products) {
		if (prod._id === 'hedfcg') {
			prod.ratings.push(rates);
		}
	}
};

const obj = {
	username: 'Ngoy',
	password: '123333',
};
// signup();

// signIn(obj);
// console.log(users);
rateProduct();
console.log(products);
