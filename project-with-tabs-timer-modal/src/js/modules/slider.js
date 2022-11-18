function slider() {
    let sliderIndex = 0,
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
        ShowSlider();
    function ShowSlider(n){
        if(n > sliders.length - 1) {
            sliderIndex = 0;
        };
        if(n < 0) {
            sliderIndex = sliders.length -1
        }
        sliders.forEach((item)=> item.style.display = 'none');
        dots.forEach((item)=> item.classList.remove('dot-active'));

        sliders[sliderIndex].style.display = 'block';
        dots[sliderIndex].classList.add('dot-active');
    
    }

    function plusSlider (n) {
        ShowSlider(sliderIndex += n);
    };

    function CurrentSlider (n) {
        ShowSlider(sliderIndex = n);
    };

    prev.addEventListener('click', function(){
        plusSlider(-1);
    });

    next.addEventListener('click', function() {
        plusSlider(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i]){
                CurrentSlider(i);
            };
        };
    });
};

module.exports = slider();