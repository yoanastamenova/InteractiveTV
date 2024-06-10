// Getting all the elements that will be needed
let buttons = document.getElementsByClassName('button');
let power = document.getElementById('power');
let screen = document.getElementById('screen');
let infoScreen = document.getElementById('infoScreen');
let chanelScreen = document.getElementById('chanelScreen');
let tvInfo = document.getElementById('tv-info');
let chUp = document.getElementById('chUp');
let chDown = document.getElementById('chDown');

// Creating array for the channels
let channels = ['default', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9'];
let currentChannel = 0;

// Disable all buttons except the power button initially
for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id !== "butOnOff") {
        buttons[i].style.pointerEvents = "none";
    }
}

// Function for displaying the info and the current channel
let changeChannel = function(channelIndex) {
    document.getElementById(channels[currentChannel]).style.display = 'none';
    currentChannel = channelIndex;
    document.getElementById(channels[currentChannel]).style.display = 'block';
    chanelScreen.innerHTML = "Channel: " + (currentChannel === 0 ? 'Default' : currentChannel);
    infoScreen.innerHTML = "Date & Time: " + new Date().toLocaleString();
}

// Event listeners for buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        let buttonId = e.target.id;

        //Check if the clicked button is the power button
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

            //Checks if the TV is off and block the buttons, hides the screen etc
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

        // Checks if a button clicked was a channel
        } else if (buttonId.startsWith('chan')) {
            let channelNum = parseInt(buttonId.replace('chan', ''));
            changeChannel(channelNum);

        //Mantaining the show/hide to the info button
        } else if (buttonId === 'info') {
            if (tvInfo.style.display === 'none') {
                tvInfo.style.display = 'block';
            } else {
                tvInfo.style.display = 'none';
            }
        }
    });
}

// Event listener for channel up button
chUp.addEventListener('click', function() {
    if (currentChannel < channels.length - 1) {
        changeChannel(currentChannel + 1);
    } else {
        changeChannel(0); 
    }
});

// Event listener for channel down button
chDown.addEventListener('click', function() {
    if (currentChannel > 0) {
        changeChannel(currentChannel - 1);
    } else {
        changeChannel(channels.length - 1); 
    }
});
