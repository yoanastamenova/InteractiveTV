let power = document.getElementById("power");
let isPlaying = false;

let button = document.getElementsByClassName("button");
let arrayButtons = Array.from(button)

let date = document.getElementById("date")
let time = document.getElementById("time")
let fecha = new Date();

let defaultScr = document.getElementById("screen")

for (let i = 0; i < arrayButtons.length; i++) {
    arrayButtons[i].addEventListener("click", () => {

        time.style.visibility = "visible";
        date.style.visibility = "visible";
        chanNum.style.visibility = "visible";

        if (isPlaying) {
            chanNum.innerHTML = `Channel ${i + 1}`
            time.innerHTML = fecha.toLocaleTimeString();
            date.innerHTML = fecha.toLocaleDateString();

            setTimeout(function () {
                time.style.visibility = "hidden";
                date.style.visibility = "hidden";
                chanNum.style.visibility = "hidden";
            }, 5500);
        }

    })
}

power.addEventListener("click", () => {

    chanNum.style.visibility = "visible";
    time.style.visibility = "visible";
    date.style.visibility = "visible";

    power.classList.toggle("ON")
    isPlaying = !isPlaying

    if (isPlaying) {
        time.innerHTML = fecha.toLocaleTimeString();
        date.innerHTML = fecha.toLocaleDateString();

        setTimeout(function () {
            time.style.visibility = "hidden";
            date.style.visibility = "hidden";
            chanNum.style.visibility = "hidden";
        }, 5500);

    } else {
        time.innerHTML = ""
        date.innerHTML = ""
        chanNum.innerHTML = ""
    }
})

