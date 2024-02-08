// String slicing
//Creating a substring from a portion of another string


const fullName = 'Carry Mode'

// let firstname = fullName.slice(0, 5); 
// let lastname = fullName.slice(6, 10);

// let firstChar = fullName.slice(0,2);
// let lastChar = fullName.slice(-4,);


// console.log(firstChar);
// console.log(lastChar);

// console.log(firstname);
// console.log(lastname);


//


// let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lastName = fullName.slice(fullName.indexOf(' ') + 1); //starts at space and +1 moves it 1 character forward


// console.log(firstName);
// console.log(lastName);

//

const email = 'Bigdickbro@gmail.com';

let userName = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);

console.log(userName);
console.log(extension);


