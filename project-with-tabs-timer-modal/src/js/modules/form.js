function form() {
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
    // Форма написанная в виде promise
    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);
    //     function promise (){
        //     return new Promise(resolve, reject){
        //         let request = new XMLHttpRequest();

            //     request.open('POST', 'server.php');
            //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
            //     let formData = new FormData(form),
            //         obj = {};
                
            //     formData.forEach(function(value, key) {
            //         obj[key] = value;
            //     });
    
            //     let json = JSON.stringify(obj);
    
            //     request.send(json);
    
            //     request.addEventListener('readystatechange', function() {
            //         if(request.readyState < 4){
            //             resolve();
            //         }else if (request.readyState === 4 && request.status == 200) {
            //             resolve();
            //         }else{
            //             reject();
            //         };
            //     });
        //      }
        //    
    //     };

            // promise();
            // .then(()=> {statusMessage.innerHTML = message.loading;})
            // .then(()=> {statusMessage.innerHTML = message.success;})
            // .catch(()=> {statusMessage.innerHTML = message.failure;})
    //     

    //     for(let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     };
    // });
};

module.exports = form();