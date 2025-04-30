function checkOrder(available, ordered) {
	if (ordered > available) {
		return 'Your order is too large, we don’t have enough goods.';
	} else if (ordered == 0) {
		return 'Your order is empty';
	} else {
		return 'Your order is accepted';
	}
}

console.log(checkOrder(3, 0)); //"Your order is too large, we don’t have enough goods."
console.log(checkOrder(1, 3)); //Ordered = 0 - "Your order is empty"
console.log(checkOrder(3, 3)); //"Your order is accepted"
