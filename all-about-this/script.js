// 1. обращения this в глобальной среде внутри функций и подфункций в ES5 и ES6
//"use strict"; //при использования строгого стандарта (ES6) вместо window нам выдаст результат гтвуаштув
console.log(this);//window
function showThis(a, b){
    console.log(this); //window
    function sum() {
        console.log(this); //window
        return this.a + this.b;// в данном примере нам выведет NaN так как нет значений в ф-ий sum
        //return a + b; // в данном примере нам выведет 8 так как он не нашел у себя в ф-ий и ушел искать у родителя 
    };
    console.log(sum()); 
};
showThis(4, 4);

// 2. обращения this в объекте

let obj = {
    a: 20,
    b: 30,
    sum: function() {
        console.log(this); // this являеться обьектом obj и возращает нам обьект
        function show(){ //покажет window так как ф-я внутри ф-ий
            console.log(this);
        };
        show();
    }
};

obj.sum();

// 3. обращение this в конструкторе

function User(name, id) {
    this.name = name; //this имеет ввиду новый обьект с коструктора. То есть ivan или alex взависимости кого мы выбрали
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    };
}
User.prototype.exit = function() {
    console.log('Hello! ' + this.name);
};

let ivan = new User('Ivan', 23), // новый обьект с конструктора
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

// 4. обращения this в связке разных элементов при помощи методов apply(), call(), bind()

let user = {
    name: 'John'
};

function sayHello (surname) {
    console.log(this); // после связки при помощи методов apply call выдаст нам переменную user, точнее его обьект
    console.log(this.name + surname); 
};

console.log(sayHello.apply(user, ['smith'])); // 1-ое значение метода с кем связываем 2-ое параметр ф-ий
console.log(sayHello.call(user, 'Snow'));

function count(number) {
    return this * number;
};

let a = count.bind(2); // 2 это у нас this

console.log(a(10)); // 10 это у нас number

// 5.  обращения this в событий вызова

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this); // Результат - button
    btn.style.background = 'red'; // меняет цвет кнопки
    function show (){
        console.log(this); //window
    };
    show();
});
