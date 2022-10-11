// ES6

'use strict';

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`);  // вызов переменной при помощий интерполяция в ES6 
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`)
    }
}

let ivan = new User('Ivan', 23),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
ivan.hello();

// ES5

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// User.prototype.exit = function() {
//     console.log('Hello! ' + this.name);
// };

// let ivan = new User('Ivan', 23),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.hello();