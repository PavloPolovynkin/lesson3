//recursion
const counter = (num) => {
	console.log(num);
	if (num > 0) {
		num--;
		return counter(num); //return value from function again until counter became 0
	}
};

counter(17);
