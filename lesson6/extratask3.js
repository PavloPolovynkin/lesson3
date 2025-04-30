//Transportation costs on vacation
let costPerDay = 40;
let input;
function transportationCost(numberOfDays) {
	//if (typeof numberOfDays !== 'number' || numberOfDays == 0) {return "Error. Please enter the number. Number should be more '0'."}; //if n is not number returned error message.

	const validationResult = isNumber(numberOfDays);
	if (typeof validationResult === 'string') {
		return validationResult; //
	}

	if (numberOfDays >= 7) {
		//more than 7 days = total -50$
		return `${numberOfDays * costPerDay - 50}$`;
	} else if (numberOfDays >= 3) {
		//more than 3 days = total -20$
		return `${numberOfDays * costPerDay - 20}$`;
	} else {
		return `${numberOfDays * costPerDay}$`;
	}
}

//just for fun i created second whit function
function isNumber(input) {
	if (typeof input !== 'number' || input == 0) {
		return "Error. Please enter the number. Number should be more '0'.";
	}
	return input; //if n is not number returned error message.
}
console.log(`Transportation costs on vacation = ${transportationCost('5t')}`); //error
console.log(`Transportation costs on vacation = ${transportationCost('5')}`); //error
console.log(`Transportation costs on vacation = ${transportationCost(5)}`); //its work)
