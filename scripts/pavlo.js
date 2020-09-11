class Dog {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.numberOfPaws = c;
    }

    makesound() {
      return 'Bark';
    }

    introduceMySelf() {
      return `Hello, my name is ${this.name}. I am ${this.age}. I have ${this.numberOfPaws}.`;
    }
}

const sharik = new Dog('Sharik', 2, 4); // { name: 'Sharik' } -> Dog

console.log(sharik.name, sharik.age, sharik.numberOfPaws);

console.log(sharik.makesound());

const tuzik = new Dog('Tuzik', 3, 4); // { name: 'Tuzik' } -> Dog

console.log(tuzik.makesound());

console.log(tuzik.name, tuzik.age, tuzik.numberOfPaws);

console.log(sharik.introduceMySelf());

console.log(tuzik.introduceMySelf());

