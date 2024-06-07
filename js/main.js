 // Kidnap all the elemnts needed
    let buttons = document.getElementsByClassName('button');
    let power = document.getElementById('power');
    let screen = document.getElementById('screen');
    let infoScreen = document.getElementById('infoScreen');
    let chanelScreen = document.getElementById('chanelScreen');
    let tvInfo = document.getElementById('tv-info');

    let channels = ['default', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9'];

    let currentChannel = 0;  

    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== "butOnOff") {
            buttons[i].style.pointerEvents = "none";
        }
    }


