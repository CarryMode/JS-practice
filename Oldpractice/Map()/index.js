// .map() = accepts a callback and applies that funciton
//          to each element of an array, then returns a new array

//-----------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
// 	return Math.pow(element, 2);
// }

// function cube(element){
// 	return Math.pow(element, 3);
// }





//-----------------------------------------------------------------






// const students = ['Bingus', 'Bilbo', 'Gandalf', 'SpooderMan'];

// const studentsToUpper = students.map(upperCase);


// const studentsToLower = students.map(lowerCase);


// function upperCase(element) {
// 	return element.toUpperCase();
// }

// function lowerCase(element) {
// 	return element.toLowerCase();
// }



// console.log(studentsToLower);


//-----------------------------------------------------------------


const dates = ['2024-10-1', '2025-20-2', '2026-30-3'];
const formattedDates = dates.map(formatDates);



function formatDates(element) {
	const parts = element.split('-');
	return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


console.log(formattedDates);



















