window.addEventListener('DOMContentLoaded', function () {

    let calculator = require('./modules/calculator.js'),
        form = require('./modules/form.js'),
        modal = require('./modules/modal.js'),
        slider = require('./modules/slider.js'),
        tabs = require('./modules/tabs.js'),
        timer = require('./modules/timer.js');

    calculator();
    form();
    modal();
    slider();
    tab();
    timer();

});