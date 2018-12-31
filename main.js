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

  tipAmount = decimalAdjustment(tipAmount);
  totalBill = decimalAdjustment(totalBill);


  let position = document.getElementsByTagName('p');

  let results = document.createTextNode('Tip:' + ' ' + "$" + tipAmount);
  let totalResults = document.createTextNode('Total after tip:' + ' ' + "$" + totalBill);


  if (position[0].hasChildNodes()) {
    position[0].removeChild(position[0].firstChild);
    position[0].appendChild(results);

  } else {

  position[0].appendChild(results);

  }

  if (position[1].hasChildNodes()) {
    position[1].removeChild(position[1].firstChild);
    position[1].appendChild(totalResults);

  } else {

    position[1].appendChild(totalResults);
  } 

  
  
}

function decimalAdjustment(x) {
  return Number.parseFloat(x).toFixed(2);
}

  document.addEventListener("submit", calculateTip);