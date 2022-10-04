let btn = document.querySelector('button'),
    box = document.querySelector('.box');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(document.documentElement.clientHeight);
console.log(box.getBoundingClientRect());

btn.addEventListener('click', function () {
    box.scrollTop = 0;
    // анологичные но методы scrollBy(x,y), scrollTo(x,y)
});

//clientTop, clientLeft, offsetHeight, offsetWidth, offsetleft, offsetTop, scrollHeight, scrollWidth, scrollLeft 