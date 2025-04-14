//task2
function isAdult (age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

console.log(`Is this person an adult? - ${isAdult(25)}`);
console.log(`Is this person an adult? - ${isAdult(15)}`);