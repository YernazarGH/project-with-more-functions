function calculator () {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        total = document.getElementById('total'),
        // опреляем начальные значения наших value
        personsSum = 0,
        daysSum = 0,
        totalValue = 0;

    total.innerHTML = 0;

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        totalValue = ((personsSum*3000) + (daysSum*2000));

        if( persons.value == '' || restDays.value == ''){
            total.innerHTML = 0;
        } else {
            total.innerHTML = totalValue;
        };
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        totalValue = ((personsSum*3000) + (daysSum*2000));

        if( persons.value == '' || restDays.value == ''){
            total.innerHTML = 0;
        } else {
            total.innerHTML = totalValue;
        };
    });

    place.addEventListener('change', function(){
        if (persons.value == '' || restDays.value == '') {
            total.innerHTML = 0;
        } else {
            let a = totalValue;
            total.innerHTML = a * this.options[this.selectedIndex].value
        };
    });
};

module.exports = calculator();