// object = A collection of related properties object = {key:value,
//                                                       function()}


const person1 = {
	fisrtName: 'Bilbo',
	lastName: 'Baggins',
	age: 69,
	isEmployed: false,
	sayHello: function () { console.log('My ring!!!') },
}


console.log(person1.fisrtName);
console.log(person1.age);

person1.sayHello();

//-----------------------------------------------------------------


const person2 = {
	fisrtName: 'Pippin',
	lastName: 'Bingus',
	age: 55,
	isEmployed: true,
	sayHello: function () { console.log(`${this.fisrtName} is big pimpin right here`) },
}

person2.sayHello();


