class Dog {
    constructor(name, age, numberOfLegs) {
        this.name = name;
        this.age = age;
        this.numberOfLegs = numberOfLegs;
    }


    makeSound() {
        return "Bark";
    }

    introduceMySelf() {
        return 'Hello my name is'+ this.name + ', My age is ' + this.age + '  year and I have ' + this. numberOfLegs + ' legs.';
    }
}

const tuzik = new Dog('tuzik', 1, 4);
console.log(tuzik.introduceMySelf());

const sharik = new Dog('sharik', 4, 4);
console.log(sharik.makeSound());