//Завдання 3: Генерація таблиці множення

//Цикл if
const Number = Math.round(Math.random() * 10 + 1);

let result;
console.log(`Талиця множення для ${Number}`);
if (typeof Number !== 'number') {
	console.log(`Значення "${Number}" НЕ є числом.`);
} else {
	for (let i = 1; i <= 10; i++) {
		result = Number * i;
		console.log(`${Number} x ${i} = ${result}`);
	}
}

//Цикл while
let counter = 1;
let resultForW = 1;
console.log(`Талиця множення для ${Number}`);
if (typeof Number !== 'number') {
	console.log(`Значення "${Number}" НЕ є числом.`);
} else {
	while (counter <= 10) {
		resultForW = Number * counter;
		console.log(`${Number} x ${counter} = ${resultForW}`);
		counter++;
	}
}
