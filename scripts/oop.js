// OOP - object orinented programming
class User {
    constructor(a, b, c) {
        this.firstName = a;
        this.age = b;
        this.gender = c;
    }
    
    sayHello() {
        return `Hello my name is ${this.firstName} and my age is ${this.age} and my gender is ${this.gender}!`
    }
}

const $usersList = document.getElementById('users-list');
const $userForm = document.getElementById('user-form');
const $firstName = document.getElementById('first-name');
const $gender = document.getElementById('gender');
const $age = document.getElementById('age');
const users = new Array();

$userForm.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const user = new User($firstName.value, $age.value, $gender.value);
   
    const $li = document.createElement('li');
    $li.innerText = user.firstName;
    $usersList.append($li);

    users.push(user);
   
    $firstName.value = '';
    $age.value = '';
});


const $play = document.getElementById('play');

$play.addEventListener('click', () => {
    if (users.length <= 1) {
        return alert('Please add at least two users to play!');
    }

    const winner = users[getRandomInt(0, users.length - 1)];

    const $h1 = document.createElement('h1');
    $h1.innerText = `Congrats ${winner.firstName}! Please tell us something about yourself!`;

    const $p = document.createElement('p');
    $p.innerText = winner.sayHello();

    document.body.innerHTML = '';

    document.body.append($h1);
    document.body.append($p);
});


function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
