function closeNav() {
  document.getElementById("mySlidenav").style.width = "0px";
}
function openNav() {
  document.getElementById("mySlidenav").style.width = "400px";
}

document.querySelector("#one").addEventListener("click", appendToDisplay);
document.querySelector("#two").addEventListener("click", appendToDisplay);
document.querySelector("#three").addEventListener("click", appendToDisplay);
document.querySelector("#four").addEventListener("click", appendToDisplay);
document.querySelector("#five").addEventListener("click", appendToDisplay);
document.querySelector("#six").addEventListener("click", appendToDisplay);
document.querySelector("#seven").addEventListener("click", appendToDisplay);
document.querySelector("#eight").addEventListener("click", appendToDisplay);
document.querySelector("#nine").addEventListener("click", appendToDisplay);
document.querySelector("#zero").addEventListener("click", appendToDisplay);
document.querySelector("#period").addEventListener("click", appendToDisplay);

document.querySelector("#backspace").addEventListener("click", removeFromDisplay);

document.querySelector("#calculate").addEventListener("click", calculatePayout);

function appendToDisplay(event) {
  const input = event.target.textContent;
  document.querySelector("#display").value += input;
  document.querySelector("#totalCostDisplay").value += input;
}

function removeFromDisplay(event) {
  const input = event.target.textContent; 
  document.querySelector("#display").value = input.slice(0, -1);
  
//    document.querySelector("#totalCostDisplay").value = input.slice(0, -1);
}

function calculatePayout() {

}
