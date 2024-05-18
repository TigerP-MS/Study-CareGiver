// 1.
// const lunchMenu = {
// 	name: '떡볶이',
// 	price: 5000,
// 	flavor: 'hot'
// }
// lunchMenu.vegan = false;
// lunchMenu.price += 500;
// delete lunchMenu.flavor;
// console.log(lunchMenu.name);
// console.log(lunchMenu['name']);
// console.log(lunchMenu);

// 2.
// function Rectangle(width, height)
// {
// 	this.width = width;
// 	this.height = height;
// 	this.describe = function ()
// 	{
// 		console.log(this.width * this.height);
// 	}
// }
// myRect = new Rectangle(20, 30);
// myRect.describe();

// 3.
// class Rectangle {
// 	static thickness = 2;
// 	constructor (width, height)
// 	{
// 		this.width = width;
// 		this.height = height;
// 	}
// 	describe()
// 	{
// 		console.log(this.width * this.height);
// 	}
// }
// let rect1 = new Rectangle(20, 30);
// console.log(Rectangle.thickness);
// rect1.describe();

// 4.

// class Rectangle {
// 	static thickness = 2;
// 	#width;
// 	#height;
// 	constructor (width, height)
// 	{
		
// 		this.#width = width;
// 		this.#height = height;
// 	}
// 	describe()
// 	{
// 		console.log(this.#width * this.#height);
// 	}
// 	get width()
// 	{
// 		return this.#width;
// 	}
// 	get height()
// 	{
// 		return this.#height;
// 	}
// 	set width(width)
// 	{
// 		if (typeof width === 'number' && width > 0)
// 			this.#width = width;
// 	}
// 	set height(height)
// 	{
// 		if (typeof height === 'number' && height > 0)
// 			this.#height = height;
// 	}
// }
// let rect1 = new Rectangle(20, 30);
// rect1.height = 50;
// rect1.describe();

// 5.
class Animal {
	constructor(sex)
	{
		this.sex = sex;
	}
	describe()
	{
		console.log(`성별 : ${this.sex}`);
	}
}

class Cat extends Animal {
	constructor(sex, breed)
	{
		super(sex);
		this.breed = breed;
	}
	describe()
	{
		console.log(`${this.breed} (${this.sex})`)
	}
}
const myAnimal = new Animal('수컷');
myAnimal.describe(); // 성별: 수컷

const myCat = new Cat('암컷', '페르시안');
myCat.describe(); // 페르시안 (암컷)