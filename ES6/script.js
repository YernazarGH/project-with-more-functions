'use strict';
//1. интерполяция

let Name = 'Yernazar',
    surname = 'Rakhimzhanov',
    age = 23;

document.write(`Hello, I'm ${Name} ${surname}, i'm ${age}`);

//2. let const var

function someThing () {
    let arr = [];
    for(let i = 0; i < 10; t++) { // еслы был бы var то у нас одна переменная на весь цикл, а let ставит на каждый инкремент контрольную переменную
        let item = function () {
            console.log(i);
        };
        arr.push(item);
    }
    return arr;
};
let array = someThing();

array[1](); //если бы в цикле был var то нам 2 раза вывела бы 10
array[3]();

// 3. 