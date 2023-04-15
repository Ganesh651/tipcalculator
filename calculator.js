let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");
let calculateButtonEl = document.getElementById('calculateButton');

calculateButtonEl.onclick = function() {
    if (billAmountInput.value === "") {
        errorMessageEl.textContent = "please enter a valid input";
    } else if (percentageTipInput.value === "") {
        errorMessageEl.textContent = "please enter a valid input";
    } else {
        errorMessageEl.textContent = "";
        let calculated = (parseInt(percentageTipInput.value) / 100) * parseInt(billAmountInput.value);
        let total = parseInt(billAmountInput.value) + calculated;
        tipAmountEl.value = calculated;
        totalAmountEl.value = total;
    }
}