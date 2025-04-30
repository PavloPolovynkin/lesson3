//
const handleNum = (number, callbackEven, callbackOdd) => {
	// let message;
	if (number % 2 == 0) {
		// message = handleEven;
		return callbackEven();
	} else {
		// message = handleOdd;
		return callbackOdd();
	}
};

function handleEven() {
	console.log('number is even');
}

function handleOdd() {
	console.log('number is odd');
}

//let result = handleNum(33,  handleEven, handleOdd)
//console.log(${handleNum(34,  handleEven, handleOdd)})  //отработат handleEven, а в handleOdd мы ничего не передаем и получаем андефайнд?!

handleNum(33, handleEven, handleOdd);
