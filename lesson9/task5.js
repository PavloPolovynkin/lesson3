//task 5
const users = [
	{ name: 'Alex', email: 'test1@gmail.com', age: 33 },
	{ name: 'Till', email: 'test2@gmail.com', age: 45 },
	{ name: 'Nicolas', email: 'test3@gmail.com', age: 81 },
	{ name: 'Alex', email: 'test4@gmail.com', age: 10 },
];

for (const { name, email, age } of users) {
	console.log(`Name: ${name}, email: ${email}, age: ${age}`);
}

//В этом варианте нету деструктуризации.
// for (const person of users) {
//     console.log(`Name: ${person.name}, email: ${person.email}, age: ${person.age}`);
// }
