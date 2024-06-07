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

    let changeChannel = function(channelIndex) {
        document.getElementById(channels[currentChannel]).style.display = 'none';
        currentChannel = channelIndex;
        document.getElementById(channels[currentChannel]).style.display = 'block';
        chanelScreen.innerHTML = "Channel: " + (currentChannel === 0 ? 'Default' : currentChannel);
        infoScreen.innerHTML = "Date & Time: " + new Date().toLocaleString();
    }
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            let buttonId = e.target.id;
    
            if (buttonId === 'butOnOff') {
                screen.classList.toggle('screenOff');
                power.classList.toggle('ON');
                power.classList.toggle('OFF');
    
                if (!screen.classList.contains('screenOff')) {
                    for (let i = 0; i < buttons.length; i++) {
                        buttons[i].style.pointerEvents = "";
                    }
                    channels.forEach(function(channel) {
                        document.getElementById(channel).style.display = 'none';
                    });
                    changeChannel(0);
                } else {
                    for (let i = 0; i < buttons.length; i++) {
                        if (buttons[i].id !== "butOnOff") {
                            buttons[i].style.pointerEvents = "none";
                        }
                    }
                    channels.forEach(function(channel) {
                        document.getElementById(channel).style.display = 'none';
                    });
                    infoScreen.innerHTML = "";
                    chanelScreen.innerHTML = "";
                    tvInfo.style.display = 'none';
                }
            } else if (buttonId.startsWith('chan')) {
                let channelNum = parseInt(buttonId.replace('chan', ''));
                changeChannel(channelNum);
            } else if (buttonId === 'info') {
                if (tvInfo.style.display === 'none') {
                    tvInfo.style.display = 'block';
                } else {
                    tvInfo.style.display = 'none';
                }
            }
        });
    }