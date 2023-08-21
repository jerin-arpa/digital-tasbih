const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulilahDisplay = document.getElementById('alhamdulilahDisplay');
const alhamdulilahIncrementBtn = document.getElementById('alhamdulilahIncrementBtn');
const alhamdulilahDecrementBtn = document.getElementById('alhamdulilahDecrementBtn');

const allahuAkbarDisplay = document.getElementById('allahuAkbarDisplay');
const allahuAkbarIncrementBtn = document.getElementById('allahuAkbarIncrementBtn');
const allahuAkbarDecrementBtn = document.getElementById('allahuAkbarDecrementBtn');

const resetBtn = document.getElementById('resetBtn');


let subhanAllahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahuAkbarInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert('Subhanallah Complete. Please fill-up another one');
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

subhanAllahDecrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert('You cant added negative value');
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
});



alhamdulilahIncrementBtn.addEventListener('click', function () {
    if (alhamdulilahInitialValue === 33) {
        return alert('Alhamdulilah Complete. Please fill-up another one');
    }
    alhamdulilahInitialValue += 1;
    alhamdulilahDisplay.innerText = alhamdulilahInitialValue;
});

alhamdulilahDecrementBtn.addEventListener('click', function () {
    if (alhamdulilahInitialValue === 0) {
        return alert('You cant added negative value');
    }
    alhamdulilahInitialValue -= 1;
    alhamdulilahDisplay.innerText = alhamdulilahInitialValue;
});



allahuAkbarIncrementBtn.addEventListener('click', function () {
    if (allahuAkbarInitialValue === 34) {
        return alert('Allahuakbar Complete. Please fill-up another one');
    }
    allahuAkbarInitialValue += 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
});

allahuAkbarDecrementBtn.addEventListener('click', function () {
    if (allahuAkbarInitialValue === 0) {
        return alert('You cant added negative value');
    }
    allahuAkbarInitialValue -= 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
});


resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.innerText = 0;
    alhamdulilahDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulilahInitialValue = 0;
    allahuAkbarInitialValue = 0;
});