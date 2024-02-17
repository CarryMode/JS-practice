// arrays = variable that can hold more than 1 value



let fruits = ['apple', 'orange', 'banana'];

 //fruits[0] = 'coconut'
 fruits[3] = 'pear'; //added to array
// fruits.push('watermelon'); //adds to the end
// fruits.pop(); // removes the last element
// fruits.unshift('mango'); //adds to the start
// fruits.shift(); //removes the first element


// let numOfFruits = fruits.length; //length of an array

// let index = fruits.indexOf('banana'); //search the number in the array


//loop through an array
// for(let i = 0; i < fruits.length; i++){
// 	console.log(fruits[i]);
// }

//count from the end to start
// for(let i = fruits.length - 1; i >=0; i--){
// 	console.log(fruits[i]);
// }

fruits.sort(); //sort alphabetically

//shortcut
for(let fruit of fruits){
	console.log(fruit);
}





//console.log(numOfFruits);
//console.log(fruits);
