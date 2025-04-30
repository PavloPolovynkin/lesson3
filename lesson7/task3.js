function divide(numerator, denominator) {
	//console.log(typeof numerator, typeof denominator)
	if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('numerator or denominator is not number or less than 0');
	}
	return numerator / denominator;
}

try {
	//console.log(divide(6, 0))  //для каждого вызова функции отдельный трай кетч. Так как после первой ошибки выдаст нам эррор и стопнеться.
	console.log(divide(6, 3));
	//console.log(divide("6", 2))
} catch (error) {
	console.log(`error: ${error}`);
} finally {
	console.log('Робота завершена');
}
