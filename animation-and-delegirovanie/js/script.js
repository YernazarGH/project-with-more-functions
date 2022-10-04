//-----------------------------------------Animation------------------------------------------------
// Работа со верменем примеры
// function sayHello () {
//     alert('Hello World!');
// };
// let timer = setTimeout(sayHello, 3000); // через 3 секунды срабатывает функция 

// clearTimeout(timer);    //останавливаеться setTimeout в переменной timer

// let timerInterval = setInterval(sayHello, 2000); //каждые 2 секунды будет исполняться ф-я sayhello
// рекурсивный метод setTimeout
// let temer = setTimeout(function log() { // каждые 2 секунды будет исполняться консольная команда
//     console.log('Hello!');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnimation () {   // перемещения бокса по диоганали
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame () {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++,
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        };
    };
};

btn.addEventListener('click', myAnimation);

let block = document.querySelector('.btn-block'),
    button = document.getElementsByTagName('button');

block.addEventListener('click', function(event) {
    if(event.target && event.target.matches('button.first')) { //делегирования также можно для всех кнопак сделать event.target.tagName == 'BUTTON'
        console.log('Hello!');
    };
});