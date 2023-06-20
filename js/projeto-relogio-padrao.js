
const list = document.querySelector('select.list') // Lista
const buttonDiv = document.querySelector('div.buttons-div') // Div com os botões
const button = document.querySelectorAll('button.buttons') // Botões do cronômetro
const displayDiv = document.querySelector('div.display-div') //
const displayText = document.querySelector('p#display-texto')
let hoursSpan = document.querySelector('span#hours')
let minutesSpan = document.querySelector('span#minutes')
let secondsSpan = document.querySelector('span#seconds')
let seconds = Number('')
let minutes = Number('')
let hours = Number('')
let timerRelogio = 'desligado'
let timerCronometro = 'desligado'

list.addEventListener('change', listSelect)

function listSelect() {

    for (let j = 0; j <= button.length - 1; j++) {
        button[j].style.backgroundColor = 'transparent'
        button[j].style.color = 'white'
    }

    if (list.selectedIndex == 0) {
        displayDiv.style.display = 'none';
        buttonDiv.style.display = 'none';
        clearTimeout(timerCronometro)
        if (timerRelogio !== 'desligado') {
            clearInterval(timerRelogio);
            timerRelogio = 'desligado';
            console.log('Relógio desligado!')
        }
        if (timerCronometro !== 'desligado') {
            clearTimeout(timerCronometro)
            timerCronometro = 'desligado'
            console.log('Cronômetro desligado!')
        }

    } else if (list.selectedIndex == 1) {
        displayDiv.style.display = 'flex';
        buttonDiv.style.display = 'none';
        if (timerRelogio === 'desligado') {
            timerRelogio = setInterval(function () {
                let hora = new Date();
                displayText.innerHTML = hora.toLocaleTimeString('pt-br', { hour12: false });
                console.log(displayText.innerHTML)
            }, 1000)
        }
        if (timerCronometro !== 'desligado') {
            clearTimeout(timerCronometro)
            timerCronometro = 'desligado'
            console.log('Cronômetro pausado!')
        }
        console.log('Relógio ligado!')

    } else if (list.selectedIndex == 2) {
        displayDiv.style.display = 'flex';
        buttonDiv.style.display = 'flex';
        displayText.innerHTML = `${hoursSpan.innerHTML}:${minutesSpan.innerHTML}:${secondsSpan.innerHTML}`
        if (timerRelogio !== 'desligado') {
            clearInterval(timerRelogio)
            timerRelogio = 'desligado'
            console.log('Relógio desligado!')
        }
    }
}

for (let i = 0; i <= button.length - 1; i++) {
    button[i].addEventListener("click", buttonClick)
}

function buttonClick() {

    for (let j = 0; j <= button.length - 1; j++) {
        button[j].style.backgroundColor = 'transparent'
        button[j].style.color = 'white'
    }
    this.style.backgroundColor = 'white'
    this.style.color = '#0065b7'

    if (this.id === 'start') {
        console.log('Cronômetro iniciado!')
        if (timerCronometro === 'desligado') {

            timerCronometro = setInterval(function () {

                seconds += 1

                if (seconds === 60) {
                    minutes += 1
                    seconds = 0
                }

                if (minutes === 60) {
                    hours += 1
                    minutes = 0
                }

                if (hours === 24) {
                    hours = 0
                }

                if (seconds < 10) {
                    secondsSpan.innerHTML = '0' + seconds
                } else {
                    secondsSpan.innerHTML = seconds
                }

                if (minutes < 10) {
                    minutesSpan.innerHTML = '0' + minutes
                } else {
                    minutesSpan.innerHTML = minutes
                }

                if (hours < 10) {
                    hoursSpan.innerHTML = '0' + hours
                } else {
                    hoursSpan.innerHTML = hours
                }

                displayText.innerHTML = `${hoursSpan.innerHTML}:${minutesSpan.innerHTML}:${secondsSpan.innerHTML}`
                console.log(displayText.innerHTML)

            }, 1000)
        }

    } else if (this.id === 'stop') {
        clearInterval(timerCronometro)
        timerCronometro = 'desligado'
        console.log('Cronômetro pausado!')

    } else if (this.id === 'reset') {
        clearInterval(timerCronometro)
        timerCronometro = 'desligado'
        seconds = 0
        minutes = 0
        hours = 0
        secondsSpan.innerHTML = '0' + seconds
        minutesSpan.innerHTML = '0' + minutes
        hoursSpan.innerHTML = '0' + hours
        displayText.innerHTML = `${hoursSpan.innerHTML}:${minutesSpan.innerHTML}:${secondsSpan.innerHTML}`
        console.log('Cronômetro resetado!')
    }
}