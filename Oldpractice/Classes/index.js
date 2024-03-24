// class = a more structured and cleaner way to work with objects


class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	displayProduct() {
		console.log(`Product: ${this.name}`);
		console.log(`Product: €${this.price}`);
	}
	calculateTotal(salesTax) {
		return this.price + (this.price * salesTax)
	}
}

const salesTax = 0.05;

const product1 = new Product('Shirt', 19.99);

const product2 = new Product(`Jeans`, 30);

const product3 = new Product(`Socks`, 4);


product1.displayProduct();
product2.displayProduct();
product3.displayProduct();


// const total = product1.calculateTotal(salesTax);
// console.log(`Total  price of ${product1.name} with tax = €${total.toFixed(2)}`);

const total = product2.calculateTotal(salesTax);
console.log(`Total  price of ${product2.name} with tax = €${total.toFixed(2)}`);
