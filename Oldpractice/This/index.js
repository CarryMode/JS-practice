// this = reference to the object where THIS is used
//        person.name = this.name



const person1 = {
	firstName: 'Reanu',
	secondName: 'Keeves',
	favFood: 'stake',
	sayHello: function () { console.log(`Hi! I am ${this.firstName} ${this.secondName}`) },
	eat: function () { console.log(`${this.firstName} is eating ${this.favFood}`) },
}


person1.sayHello();

person1.eat();


//-----------------------------------------------------------------


