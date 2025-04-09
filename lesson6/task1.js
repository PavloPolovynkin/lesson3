//task1 (function declaration)
function square1(width, height) {
    let result = width * height;
    return result;
}
console.log(`square = ${square1(5, 10)}; //(function declaration)`);

//task1 (function expression)
const square2 = function (width, height) {
    return width * height;
}

console.log(`square = ${square2(5, 7)}; //(function expression)`);

//task1 (arrow function)
const square3 = (width, height) => width * height;
console.log(`square = ${square3(8, 10)}; //(arrow function)`);