

window.addEventListener('DOMContentLoaded', function() {

    let deadline = new Date('2022-10-07 GMT+0600');

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
                }
            }

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
    
});
