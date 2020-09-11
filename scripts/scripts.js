const user = {
    firstName: 'John',
    sayHello: function () { // const this = user;
        return 'Hello ' + this.firstName;
    }
}

function sayHello() {
    return 'hi';
}

console.log(user.sayHello());

user.firstName = 'Test';

console.log(user.sayHello());

console.log(sayHello());
