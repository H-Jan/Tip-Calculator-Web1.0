const bill_input = document.querySelector('.bill');
const percentage_input = document.querySelector('.percentage');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');
const total_btn = document.querySelector('#total-btn')

tip_btn.addEventListener('click', calc_tip);
total_btn.addEventListener('click', calc_total);

function calc_tip () {
 let bill = Number(bill_input.value);
 let percentage = Number(percentage_input.value) / 100;
 let people = Number(people_input.value);
 let tip = (bill * percentage) / people;
 
 let tip_calc = document.querySelector('.tip-section .tip');
 tip_calc.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' per person' : '');
 // The above loop format was learned onlinex as an append should the value of people be greater than 1
}

// The below line of code is proving troublesome in connecting the Total Button to its desired function.
// The main issue is the loss of function fo rdefined variables, being left undefined or unused. 
function calc_total () {
 bill_input + calc_tip;

 let total = document.querySelector('.total-selection .totality');
 total.innerText = '$' 
}

