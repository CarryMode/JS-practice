// Loop practice



// for (initialization; condition; update) {
 	// Code to be executed
//  }
 




// for (let i = 0; i <= 5; i++) {
// 	console.log(i);
//  }

//-------------------------------

// while (condition) {
 	// Code to be executed
//  }
 




// let num = 2;
// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }


//-------------------------------



// do {
 	// Code to be executed
//  } while (condition);
 



// let count = 0;
// do {
//   console.log("This is message", count + 1);
//   count++;
// } while (count < 5);

//-------------------------------


let numbers = [1, 5, 3, 7, 9, 10, 12, 14];
for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num, "is even.");
  } else {
    console.log(num, "is odd.");
  }
}
