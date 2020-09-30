const bill_input = document.querySelector('.bill');
const percentage_input = document.querySelector('.percentage');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');
const total_btn = document.querySelector('#total-btn')

tip_btn.addEventListener('click', calc_tip);
total_btn.addEventListener('clicl', calc_total);

function calc_tip () {
 let bill = Number(bill_input.value);
 let percentage = Number(percentage_input.value) / 100;
 let people = Number(people_input.value);
 let tip = (bill * percentage) / people;
 
 let tip_calc = document.querySelector('.tip-wrap .tip');
 tip_calc.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' per person' : '');
}

function calc_total () {
    let bill = Number(bill_input.value);
    let total = Number(calc_tip.value) + bill;

total.innerText = '$' + total.toFixed(2)
}
