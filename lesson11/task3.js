//async func todo. Added number id like parameter for fun
async function fetchAPITODO(numberId) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${numberId}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

//async func user.
async function fetchAPIUsers(numberId) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${numberId}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

// fetchAPITodo('https://jsonplaceholder.typicode.com/todos/1').then(console.log)
// fetchAPITodo('https://jsonplaceholder.typicode.com/users/1').then(console.log)

//async func for promise.all
async function promiseAll(numberId) {
	try {
		const response = await Promise.all([fetchAPITODO(numberId), fetchAPIUsers(numberId)]);
		console.log('Promise.all(wait for all items from array):', response);
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

//async func for promise.race
async function promiseRace(numberId) {
	try {
		const response = await Promise.race([fetchAPITODO(numberId), fetchAPIUsers(numberId)]);
		console.log('Promise.race(wait for first item from array):', response);
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}
promiseAll(1); //'2' its a id for todo/users
promiseRace(1); //'2' its a id for todo/users
