(() => {
    const list = document.querySelector('select.list');
    const buttonDiv = document.querySelector('div.buttons-div');
    const button = document.querySelectorAll('button.buttons');
    const displayDiv = document.querySelector('div.display-div');
    const displayText = document.querySelector('p#display-texto');
    let hoursSpan = document.querySelector('span#hours');
    let minutesSpan = document.querySelector('span#minutes');
    let secondsSpan = document.querySelector('span#seconds');
    let seconds = Number('');
    let minutes = Number('');
    let hours = Number('');
    let timerRelogio = 'desligado';
    let timerCronometro = 'desligado';
  
    list.addEventListener('change', listSelect);
  
    function listSelect() {
      const selectedIndex = list.selectedIndex;
  
      if (selectedIndex === 0) {
        displayDiv.style.display = 'none';
        buttonDiv.style.display = 'none';
        clearTimeout(timerCronometro);
  
        if (timerRelogio !== 'desligado') {
          clearInterval(timerRelogio);
          timerRelogio = 'desligado';
          console.log('Relógio desligado!');
        }
  
        if (timerCronometro !== 'desligado') {
          clearTimeout(timerCronometro);
          timerCronometro = 'desligado';
          console.log('Cronômetro desligado!');
        }
      } else if (selectedIndex === 1) {
        displayDiv.style.display = 'flex';
        buttonDiv.style.display = 'none';
  
        if (timerRelogio === 'desligado') {
          timerRelogio = setInterval(() => {
            const hora = new Date();
            displayText.innerHTML = hora.toLocaleTimeString('pt-br', { hour12: false });
            console.log(displayText.innerHTML);
          }, 1000);
        }
  
        if (timerCronometro !== 'desligado') {
          clearTimeout(timerCronometro);
          timerCronometro = 'desligado';
          console.log('Cronômetro pausado!');
        }
  
        console.log('Relógio ligado!');
      } else if (selectedIndex === 2) {
        displayDiv.style.display = 'flex';
        buttonDiv.style.display = 'flex';
        displayText.innerHTML = `${hoursSpan.innerHTML}:${minutesSpan.innerHTML}:${secondsSpan.innerHTML}`;
  
        if (timerRelogio !== 'desligado') {
          clearInterval(timerRelogio);
          timerRelogio = 'desligado';
          console.log('Relógio desligado!');
        }
      }
    }
  
    function buttonClick() {
      for (let j = 0; j <= button.length - 1; j++) {
        button[j].style.backgroundColor = 'transparent';
        button[j].style.color = 'white';
      }
  
      this.style.backgroundColor = 'white';
      this.style.color = '#0065b7';
  
      if (this.id === 'start') {
        console.log('Cronômetro iniciado!');
  
        if (timerCronometro === 'desligado') {
          timerCronometro = setInterval(() => {
            seconds += 1;
  
            if (seconds === 60) {
              minutes += 1;
              seconds = 0;
            }
  
            if (minutes === 60) {
              hours += 1;
              minutes = 0;
            }
  
            if (hours
  