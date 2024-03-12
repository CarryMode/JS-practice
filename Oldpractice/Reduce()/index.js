// .reduce() = reduce the elements of an array to a single value


//-----------------------------------------------------------------

// const prices = [5, 8, 22, 56, 77, 15];

// const total = prices.reduce(sum);



// function sum(accumulator, element){
// 	return accumulator + element;
// }

// console.log(`€${total.toFixed(2)}`);




//-----------------------------------------------------------------


const grades = [12, 56, 87, 32, 87, 34, 73];

const maximum = grades.reduce(getMaxValue);
const minimum = grades.reduce(getMinValue);

function getMaxValue(prevElement, nextElement) {
	return Math.max(prevElement, nextElement);
}

function getMinValue(prevElement, nextElement) {
	return Math.min(prevElement, nextElement);
}


console.log(maximum);
console.log(minimum);



