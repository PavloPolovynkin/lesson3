//task 3
const car1 = {
    brand: 'ZAZ', 
    model: "Tavria",
    year: 2000
}

const car2 = {
    brand: "Daewoo", 
    model: 'Lanos',
    year: 2001
}
const car3 = {...car1, ...car2}

//output - { brand: 'Daewoo', model: 'Lanos', year: 2001 }. Properties in car1 and car2 have tha same names.
console.log(car3)  