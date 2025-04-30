function evenNumber(n) {
	if (typeof n !== 'number') {
		return 'Error. Please enter the number';
	} //if n is not number returned error message.

	if (n % 2 == 0) {
		return true;
	} else if (n % 2 != 0) {
		return false;
	}
}

console.log(evenNumber(0)); //true - 0 is a even number!
console.log(evenNumber(1)); //false - UNeven Number
console.log(evenNumber(-2)); //true - Even Number
console.log(evenNumber(4.1)); //false - Floats with decimal part non equal to zero are considered UNeven
console.log(evenNumber(0.4)); //false - Floats with decimal part non equal to zero are considered UNeven
console.log(evenNumber('t')); //false - Not a Number
