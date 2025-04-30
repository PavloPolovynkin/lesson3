//task 6 Сортування масивів
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const sortedNumbersList = numbersList;
sortedNumbersList.sort(function (a, b) {
	return a - b;
});
console.log(`Array before sorting: ${numbersList}`);
console.log(`Array after sorting: ${sortedNumbersList}`);
