const bill_input = document.querySelector('.bill');
const percentage_input = document.querySelector('.percentage');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');
const total_btn = document.querySelector('#total-btn')

tip_btn.addEventListener('click', calc_tip);

function calc_tip () {
 let bill = parseInt(bill_input.value);
 let percentage = parseInt(percentage_input.value) / 100;
 let people = parseInt(people_input.value);
 let tip = (bill * percentage) / people;
 let billtotal = bill + (bill * percentage)
 
 let tip_calc = document.querySelector('.tip-section .tip');
 tip_calc.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' per person' : '');

 let total = document.getElementById('totality');
 total.innerHTML = '$' + billtotal.toFixed(2)

 // if innerText, returns null error. innerHTML with .toFixed converts to string allowing decimal points. 
// Use of one button to calculate TIP. mix of getElementbyId and innerHTML provided result

}


