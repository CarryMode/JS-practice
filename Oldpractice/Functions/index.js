//  FUNCTIONS a section of reusable code
//  Declare a function then call it whenever you want.



// function happyBirthday(userName, userAge){
// 	console.log('Happy birthday to you');
// 	console.log('Happy birthday to you');
// 	console.log(`Happy birthday ${userName}`);
// 	console.log('Happy birthday to you');
// 	console.log(`you are ${userAge} old!`);
// }


// happyBirthday('CarryMode', 28);
// happyBirthday('BitchBoy', 69);



function add(x, y){
return x + y;
}


function subtract(x, y){
	return x - y;
}

function multiply(x, y){
	return x * y;
}

function divide(x ,y){
	return x / y;
}

// function isEven(number){
// 	if(number % 2 === 0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

function isEven(number){
	return number % 2 === 0 ? true : false;
}



console.log(isEven(8));




function isValidEmail(email){
	if(email.includes('@')){
		return true;
	}
	else{
		return false;
	}
}

console.log(isValidEmail('Piska@mail.ru'));
console.log(isValidEmail('nepiskamail.com'));


