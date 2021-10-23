const icon = document.querySelector(".settings-icon")
const inputContainer = document.querySelector(".form-containers")
const sound = document.getElementById("sound")
const stop = document.getElementById("stop")

const button = document.getElementById("button")
const inputs = document.querySelectorAll(".form-container > input")

icon.addEventListener("click", function (event) {
    inputContainer.classList.toggle("form-containers-active")
})

stop.addEventListener("click", function() {
    stop.classList.toggle("active-stop")
    sound.pause();
    sound.currentTime = 0;
})

let myInterval;

button.addEventListener("click", function (event) {
    const days = inputs[0].value ? parseInt(inputs[0].value) : 0;
    const hours = inputs[1].value ? parseInt(inputs[1].value) : 0;
    const minutes = inputs[2].value ? parseInt(inputs[2].value) : 0;
    const seconds = inputs[3].value ? parseInt(inputs[3].value) : 0;
    inputContainer.classList.toggle("form-containers-active")

    inputs.forEach(input => {
        input.value = "";
    });

    time = (days * 86400) + (hours * 3600) + (minutes * 60) + (seconds)

    if (myInterval) {
        clearInterval(myInterval)
    }


    myInterval = setInterval(function () {

        const textDay = Math.floor(time / 86400)
        const textHour = Math.floor((time % 86400) / 3600)
        const textMinute = Math.floor((time % 3600) / 60)
        const textSecond = Math.floor((time % 60))

        console.log(time, textDay, textHour, textMinute, textSecond)
  
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;

        if (time == 0 ) {
            clearInterval(myInterval)
            sound.play()
            stop.classList.toggle("active-stop")
        }
        time -= 1;

    }, 1000)
})

