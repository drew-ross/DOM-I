const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

let tens = 0;
let ones = 0;
let tenths = 0;
let hundredths = 0;

setInterval(function() {
    hundredths += 1;
    if(hundredths >= 10) {
        hundredths = 0;
        tenths += 1;
    }
    if(tenths >= 10) {
        tenths = 0;
        ones += 1;
    }
    if(ones >= 10) {
        ones = 0;
        tens += 1;
    }
    msHundreds.textContent = hundredths;
    msTens.textContent = tenths;
    secondOnes.textContent = ones;
    secondTens.textContent = tens;
}, 10);