// Switch
// can be an efficient replacement for many else if statements


// let day = 3;


// //We need BREAK to break out of the switch
// switch(day){
// 	case 1: //need to put : in cases 
// 		console.log('It is Monday');
// 		break;
// 	case 2:
// 		console.log('It is Tuesday');
// 		break;
// 	case 3:
// 		console.log('It is Wednesday My Dudes');
// 		break;
// 	case 4:
// 		console.log('It is thirsday');
// 		break;
// 	case 5:
// 		console.log('It is Friday');
// 		break;
// 	case 6:
// 		console.log('It is Saturday');
// 		break;
// 	case 7:
// 		console.log('It is Sunday');
// 		break;
// 	default:
// 		console.log(`${day} is not a day of the week.`);
// }



let testScore = 49;
let letterGrade;

switch(true){
	case testScore >=90: 
		letterGrade = 'A';
		break;
	case testScore >=80:
		letterGrade = 'B'
		break;
	case testScore >=70:
		letterGrade = 'C'
		break;
	case testScore >=60:
		letterGrade = 'D'
		break;
	case testScore >=50:
		letterGrade = 'F but still passed'
		break;
	case testScore <50: //This can be a default but this also works
		letterGrade = 'You failed my dude.'
		break;
}
console.log(letterGrade);

//Changed a comment to add to github
//AAAAAAAAAAAAAAAAA