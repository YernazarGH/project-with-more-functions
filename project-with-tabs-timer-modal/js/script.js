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

    let deadline = new Date('2022-11-15 GMT+0600');

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
    class Options {
        constructor (height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        metod() {
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            let param = `width:${this.width}px;height:${this.height}px;background:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;
            elem.style.cssText = param;   //cssText в стиль добавить css текст, то есть elem {все что написанно в параметре param}
        }
    }
    let item = new Options(300, 200, 'red', 20, 'center');
    item.metod();

    // Post method on form

    let message = {
        loading: 'Загрузка ...',
        success: 'Спасибо, мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        form2 = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        input2 = form2.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form),
            obj = {};
        
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4){
                statusMessage.innerHTML = message.loading;
            }else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            }else{
                statusMessage.innerHTML = message.failure;
            };
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        };
    });
    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        form2.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form),
            obj = {};
        
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4){
                statusMessage.innerHTML = message.loading;
            }else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            }else{
                statusMessage.innerHTML = message.failure;
            };
        });

        for(let i = 0; i < input.length; i++) {
            input2[i].value = '';
        };
    });
});