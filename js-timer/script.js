

window.addEventListener('DOMContentLoaded', function() {

    let deadline = new Date('2022-10-07 GMT+0600');

    function timeToTimer() {
        let time = Date.parse(deadline) - Date.parse(new Date()),
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

    let seconds = document.querySelector('.seconds'),
        minutes = document.querySelector('.minutes'),
        hours = document.querySelector('.hours'),
        interval = setInterval(updateSeconds, 1000);
   
    function updateSeconds(){
        seconds.textContent = timeToTimer().seconds;
        minutes.textContent = timeToTimer().minutes;
        hours.textContent = timeToTimer().hours;
    
        if (timeToTimer().seconds < 10) {
            seconds.textContent = '0' + timeToTimer().seconds;
        } else if (timeToTimer().minutes < 10) {
            minutes.textContent = '0' + timeToTimer().minutes;
        } else if (timeToTimer().hours < 10) {
            hours.textContent = '0' + timeToTimer().hours;
        };

        if(timeToTimer().total <= 0) {
            clearInterval(interval);
            seconds.textContent = '00';
            minutes.textContent = '00';
            hours.textContent = '00';
        };
    };
});
