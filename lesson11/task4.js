//class TODO
class TODO {
	//async func todo
	async fetchAPITODO() {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error:', error);
			throw error; //!!!
		}
	}
}

//class User
class Users {
	//async func user.
	async fetchAPIUsers() {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error:', error);
			throw error;
		}
	}
}

//async func for promise.all
async function promiseAll(todoID, userID) {
	try {
		const response = await Promise.all([todoID.fetchAPITODO(), userID.fetchAPIUsers()]);
		console.log('Promise.all(wait for all items from array):', response);
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

//async func for promise.race
async function promiseRace(todoID, userID) {
	try {
		const response = await Promise.race([todoID.fetchAPITODO(), userID.fetchAPIUsers()]);
		console.log('Promise.race(wait for first item from array):', response);
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}
//created instances for each classes
const todo1 = new TODO();
const user1 = new Users();

//call functions for instances
promiseAll(todo1, user1);
promiseRace(todo1, user1);
