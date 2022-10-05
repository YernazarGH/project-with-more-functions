

window.addEventListener('DOMContentLoaded', function() {

    let deadline = new Date('2022-10-09');

    function timeToTimer() {
        let time = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((time/1000) % 60),
            minutes = Math.floor(((time/1000)/60) % 60),
            hours = Math.floor((((time/1000)/60)/60) % 24);
        
        return {
            'total' : time,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    };

    let seconds = document.querySelector('.seconds'),
        interval = setInterval(updateSeconds, 1000);
    function updateSeconds(){
        seconds.textContent = timeToTimer().seconds;
        if(timeToTimer().total <= 0) {
            clearInterval(interval);
        } else {
            interval;
        };
    };
});
