// rest parameters = (...rest)
// allow a function work with a variable number of arguments by building them in to an array

//  spread = expands an array in to seperate elements
//  rest = bundels seperate elements in to an array


//-------------------------

// function sum(...numbers){

// 	let result = 0;
// 	for(let number of numbers){
// 		result += number;
// 	}
// 	return result;
// }

// const total = sum(1, 2, 3);

// console.log(`Your total is $${total}`);

//-------------------------

// function getAverage(...numbers){

// 	let result = 0;
// 	for(let number of numbers){
// 		result += number;
// 	}
// 	return result / numbers.length;
// }


// const total = getAverage(75, 100, 85, 55, 30)
// console.log(total);


//-------------------------

function combineStrings(...strings){
	return strings.join(' ');
}

const fullName = combineStrings('The', 'Spongebob', 'Squarepants');

console.log(fullName);





//-------------------------


// function openFridge(...foods){
// 	console.log(foods);
// }


// function getFood(...foods){
// 	return foods;
// }



// const food1 = 'pizza';
// const food2 = 'coke';
// const food3 = 'caviar';
// const food4 = 'butter';
// const food5 = 'chicken';


//openFridge(food1, food2, food3, food4, food5);


// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);

//-------------------------



