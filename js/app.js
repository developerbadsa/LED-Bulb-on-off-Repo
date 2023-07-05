        var light = document.querySelector('.light-image'); 
        var switchOn = document.querySelector('.switch-on'); 
        var switchOff = document.querySelector('.switch-off');

        switchOn.addEventListener('click', function (){

            light.src = "pic_bulbon.gif";
            console.log('pic_bulbon.gif');
        })

        switchOff.addEventListener('click', function (){ 

        light.src = "pic_bulboff.gif";
        console.log('pic_bulbon.gif');
        })