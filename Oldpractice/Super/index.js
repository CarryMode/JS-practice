// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent




class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	move(speed) {
		console.log(`The ${this.name} moves at a speed of ${speed} km/h`);
	}
}


class Rabbit extends Animal {
	constructor(name, age, runSpeed) {
		super(name, age);
		this.runSpeed = runSpeed;
	}
	run() {
		console.log(`This ${this.name} can run.`);
		super.move(this.runSpeed)
	}
}


class Shark extends Animal {
	constructor(name, age, swimSpeed) {
		super(name, age);
		this.swimSpeed = swimSpeed;
	}
	swim() {
		console.log(`This ${this.name} can swim.`);
		super.move(this.swimSpeed);
	}
}


class Crow extends Animal {
	constructor(name, age, flightSpeed) {
		super(name, age);
		this.flightSpeed = flightSpeed;
	}
	flight() {
		console.log(`This ${this.name} can fly.`);
		super.move(this.flightSpeed);
	}
}



const rabbit = new Rabbit('Big chungus', 3, 10);
const shark = new Shark(`Teeths`, 10, 80);
const crow = new Crow('Blackie', 2, 120);

console.log(rabbit.name);
console.log(shark.age);
console.log(crow.flightSpeed);

shark.swim();



//-----------------------------------------------------


