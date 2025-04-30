//task 2 Копіювання з мутацією

////v1
// const numbers = [1, 2, 3, 4, 5];
// const modifiedNumbers = numbers.map((numbers) => numbers);
// for (let i = 0; i < numbers.length; i++) {
//     modifiedNumbers[i] = modifiedNumbers[i] * i
// }
// console.log(modifiedNumbers)

////v2
// const numbers = [1, 2, 3, 4, 5];
// const modifiedNumbers = numbers.map((num, index) => num * index);
// console.log(modifiedNumbers)

////v3
const numbers = [1, 2, 3, 4, 5];
const modifiedNumbers = numbers.map((num, index) => {
	if (numbers.length) {
		return num * index;
	}
});
console.log(modifiedNumbers);
