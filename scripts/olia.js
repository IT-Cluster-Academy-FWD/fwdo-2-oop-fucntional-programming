class Dog {
  constructor(name, age, numOfLegs) {
    this.name = name;
    this.age = age;
    this.numOfLegs = numOfLegs;
  }

  makeSound() { 
    return "Bark";
  }

  introduceMyself(){
    return "Hello! My name is " + this.name + ". " + "My age is " + this.age + ". " + "My number of legs is " + this.numOfLegs + ".";
  }
  
}

const myDog = new Dog("Poppy", 2, "4 legs");
console.log(myDog.name, myDog.age, myDog.numOfLegs);
console.log(myDog.makeSound());
alert(myDog.introduceMyself());

const myNextDog = new Dog("Robby", 3, "4 legs");
console.log(myNextDog.name, myNextDog.age, myNextDog.numOfLegs);
console.log(myNextDog.makeSound());
console.log(myNextDog.introduceMyself());