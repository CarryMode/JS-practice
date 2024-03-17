// arrow functions = a concise way to write function expressions
//                            good for functions that are used only once



//-----------------------------------------------------------------


// const hello = (name, age) => {console.log(`Hello ${name}`);
// 								console.log(`You are ${age}`);
// };


// hello('Bingus', 25);



//-----------------------------------------------------------------

// setTimeout( () => console.log('Hello') ,3000);



//-----------------------------------------------------------------


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

const minus1 = numbers.map((element) => element - 1);

const evenNums = numbers.filter((element) => element % 2 === 0);


console.log(squares);

console.log(minus1);

console.log(evenNums);

