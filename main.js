let tipAmount = 0;
let totalBill = 0;

function calculateTip(event) {
  event.preventDefault();
  
  let inputOne = document.getElementById('amount').value;
  let inputTwo = document.getElementById('service').value;

  inputOne = Number(inputOne);
  inputTwo = Number(inputTwo);

  inputTwo /= 100;
  tipAmount = inputOne * inputTwo;
  totalBill = inputOne + tipAmount;

  function decimalAdjustment(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  tipAmount = decimalAdjustment(tipAmount);
  totalBill = decimalAdjustment(totalBill);


  let position = document.getElementsByTagName('p');

  let results = document.createTextNode(' ' + "$" + tipAmount);
  let totalResults = document.createTextNode(' ' + "$" + totalBill);

  position[0].appendChild(results);
  position[1].appendChild(totalResults);
  

}
  document.addEventListener("submit", calculateTip);