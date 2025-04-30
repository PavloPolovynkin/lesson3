// Fetch ToDo
function fetchAPITodo(url) {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

// Fetch Users - i can not undestand why we created this func. we can call the function with another URL as a parameter
function fetchAPIUsers(url) {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

const promisesCollection1 = Promise.all([
	fetchAPITodo('https://jsonplaceholder.typicode.com/todos/1'),
	fetchAPIUsers('https://jsonplaceholder.typicode.com/users/1'),
]);

const promisesCollection2 = Promise.race([
	fetchAPITodo('https://jsonplaceholder.typicode.com/todos/1'),
	fetchAPIUsers('https://jsonplaceholder.typicode.com/users/1'),
]);

// Array
promisesCollection1.then((result) => {
	console.log('Promise.all(wait for all items from array):', result);
});

// first from array
promisesCollection2.then((result) => {
	console.log('Promise.race(wait for first item from array):', result);
});
