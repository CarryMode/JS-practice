// constructor = special method for defining the
//               properties and methods of objects




function Car(make, model, year, color) {
	this.make = make,
		this.model = model,
		this.year = year,
		this.color = color
}

const car1 = new Car('BMW', 'M3', 2004, 'blue');

const car2 = new Car('Ford', 'Focus', 2008, 'Gray');

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1);

console.log(car2);