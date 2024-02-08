// ternary operator 
// shorter way to do if{} Else{} statements


// let age = 21;
// let message = age >=18 ? 'Youre an adult': 'Youre a chjild';
// console.log(message);


// let time = 16;
// let greeting = time < 12 ? 'Good morning': 'Good day sir'
// console.log(greeting);


// let isStudent = true;
// let message = isStudent ? 'You are a student': 'Get yo ass out of here';
// console.log(message);


let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Total is $${purchaseAmount - purchaseAmount * (discount/100)}`);