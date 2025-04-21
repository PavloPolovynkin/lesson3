//task 4
const person = {
    firstName: 'Alex',
    lastName: 'Lin',
    age: 33,
}
console.log(person);
person.email = 'test@gmail.com';  //added email
delete person.age; //deleted age

console.log(person);