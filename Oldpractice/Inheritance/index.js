// ingeritance = allows an ew class to inherit properties 
//              from an existing class (parent -> child)


class Animal {
	alive = true;

	eat() {
		console.log(`This ${this.name} is eating`);
	}
	sleep() {
		console.log(`This ${this.name} is sleeping`);
	}
}



class Rabbit extends Animal {
	name = 'rabbit';
	run() {
		console.log(`This ${this.name} is running`);
	}
}

class Fish extends Animal {
	name = 'fish';
	swim() {
		console.log(`This ${this.name} is swimming`);
	}
}

class Crow extends Animal {
	name = 'crow';
	fly() {
		console.log(`This ${this.name} is flying`);
	}
}



const rabbit = new Rabbit();
const fish = new Fish();
const crow = new Crow();


console.log(rabbit.alive);

rabbit.eat();
crow.fly();
fish.swim();

//-----------------------------------------------------








