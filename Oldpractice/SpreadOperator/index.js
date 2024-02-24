// Spread operator - ... unpacks elements




// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);




// let username = 'Carry Mode';
// let letters = [...username].join('-');

// console.log(letters);


let fruits = ['banana', 'pinaple', 'orange'];
let newFruits = [...fruits]; //Two different arrays but they contain the same elements


let vegetables = ['potatoes', 'onions', 'carrots'];
let foods = [...fruits, ...vegetables, 'eggs', 'milk'];

console.log(foods);
console.log(newFruits);