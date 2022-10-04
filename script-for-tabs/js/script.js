window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabs = document.querySelectorAll('.info-header-tabs'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabsContent(a) { // ф-я для скрытия табов
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    function showTabsContent(b) {   // ф-я для показа табов
        if(tabContent[b].classList.contains('hide')) {
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
        };
    };

    info.addEventListener('click', function(event) {    // основное событие для скрытие всех и показа нужного таба
        let target = event.target;
        if (target && target.classList.contains('info-header-tabs')) {
            for(let i = 0; i < tabs.length; i++) {
                if(target[i] == tabs[i]) {
                    hideTabsContent(0);
                    showTabsContent(i);
                    break;
                };
            };
        };
    });
});