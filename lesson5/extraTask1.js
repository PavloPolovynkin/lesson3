//extra task 

//Array is created
let array = [];
let number;
for (let i = 0; i <= 4; i++) {
    number = ((Math.random() * 100) + 1).toFixed(2);  
    array [i] = number;
}
console.log(`Array is created:`);
console.log(array);

//Arrays values is rounded to a nearest number, divisible by 5
for (let i = 0; i <= 4; i++) {
    number = (Math.round(array[i] / 5) * 5);  
    array [i] = number;
}
console.log("Array is rounded to a nearest number, divisible by 5:");
console.log(array);
