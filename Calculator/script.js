const clear = document.getElementById("clear");
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const mod = document.getElementById("mod");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultDisplay = document.getElementById("result-display");
function checkInputs(){
  if(num1.value === ""){
    alert("Please Enter First Value")
    num1.classList.add("error")
  }else if(num2.value === ""){
    alert("Please Enter Secont Value")
    num2.classList.add("error")
  }else{
    num1.classList.remove("error")
    num2.classList.remove("error")
  }
}
clear.addEventListener("click", () => {
  //   debugger;
  num1.value = "";
  num2.value = "";
  resultDisplay.innerHTML = "";
});
addition.addEventListener("click", () => {
  //   debugger;
  checkInputs()
  let result = parseFloat(num1.value) + parseFloat(num2.value);
  resultDisplay.innerHTML = result;
});
subtraction.addEventListener("click", () => {
  //   debugger;
  checkInputs()
  let result = parseFloat(num1.value) - parseFloat(num2.value);
  resultDisplay.innerHTML = result;
});
multiplication.addEventListener("click", () => {
  //   debugger;
  checkInputs()
  let result = parseFloat(num1.value) * parseFloat(num2.value);
  resultDisplay.innerHTML = result;
});
division.addEventListener("click", () => {
  //   debugger;
  checkInputs()
  let result = parseFloat(num1.value) / parseFloat(num2.value);
  resultDisplay.innerHTML = result;
});
mod.addEventListener("click", () => {
  //   debugger;
  checkInputs()
  let result = parseFloat(num1.value) % parseFloat(num2.value);
  resultDisplay.innerHTML = result;
});