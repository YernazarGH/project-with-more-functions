window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabs = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabsContent(a) { // ф-я для скрытия табов
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        };
    };

    function showTabsContent(b) {   // ф-я для показа табов
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        };
    };

    info.addEventListener('click', function(event) {    // основное событие для скрытие всех и показа нужного таба
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tabs.length; i++) {
                if(target == tabs[i]) {
                    hideTabsContent(0);
                    showTabsContent(i);
                    break;
                };
            };
        };
    });

    // timer

    let deadline = new Date('2022-10-10 GMT+0600');

    function timeToTimer(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time/1000) % 60),
            minutes = Math.floor(((time/1000)/60) % 60),
            hours = Math.floor((((time/1000)/60)/60));
        
        return {
            'total' : time,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    };

    function StartTimer(endtime) {
        let seconds = document.querySelector('.seconds'),
            minutes = document.querySelector('.minutes'),
            hours = document.querySelector('.hours'),
            interval = setInterval(updateTime, 1000);

        function updateTime(){
            let t = timeToTimer(endtime);
            
            function addZero (num) {
                if (num < 10) {
                    return '0' + num;
                }else {
                    return num;
                };
            };

            seconds.textContent = addZero(t.seconds);
            minutes.textContent = addZero(t.minutes);
            hours.textContent = addZero(t.hours);
        
            // За место ф-ий addZero можно создать такие условия
            // if (t.seconds < 10) {
            //     seconds.textContent = '0' + t.seconds;
            // };
            // if (t.minutes < 10) {
            //     minutes.textContent = '0' + t.minutes;
            // };
            // if (t.hours < 10) {
            //     hours.textContent = '0' + t.hours;
            // };
            
            if(t.total <= 0) {
                clearInterval(interval);
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
            };
        };
    };

    StartTimer(deadline);
    
    // Modal

    let more = document.querySelector('.more'),
        modal = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        modal.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';// при открытие модалки чтобы задний фон не перемещалься
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // let age = document.getElementById('age');
 
    // function showUser(surname, name) {
    //          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }
    
    // showUser.apply(age, ["Горький","Максим"]);
});