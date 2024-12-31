//Single Product Image Slider
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
//End Single Product Image Slider

//Counter Sabad Kharid
let counter = 0;

const counter1Value = document.getElementById('counter1-value');
const increment1Btn = document.getElementById('increment1-btn');
const decrement1Btn = document.getElementById('decrement1-btn');

const counter2Value = document.getElementById('counter2-value');
const increment2Btn = document.getElementById('increment2-btn');
const decrement2Btn = document.getElementById('decrement2-btn');

const counter3Value = document.getElementById('counter3-value');
const increment3Btn = document.getElementById('increment3-btn');
const decrement3Btn = document.getElementById('decrement3-btn');

//for increment value of counter1
increment1Btn.addEventListener('click', () => {
    counter++;
    counter1Value.innerHTML = counter;
});
// for decrement the value of counter1
decrement1Btn.addEventListener('click', () => {
    counter--;
    counter1Value.innerHTML = counter;
});
//---------------------------------------------
//for increment value of counter2
increment2Btn.addEventListener('click', () => {
    counter++;
    counter2Value.innerHTML = counter;
});
// for decrement the value of counter2
decrement2Btn.addEventListener('click', () => {
    counter--;
    counter2Value.innerHTML = counter;
});
//--------------------------------------------
//for increment value of counter3
increment3Btn.addEventListener('click', () => {
    counter++;
    counter3Value.innerHTML = counter;
});
// for decrement the value of counter3
decrement3Btn.addEventListener('click', () => {
    counter--;
    counter3Value.innerHTML = counter;
});
//End Counter Sabad Kharid


