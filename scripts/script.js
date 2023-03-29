// 1.Get a reference to the button - > querySelector
const button = document.querySelector("#ClickMe");
//2. define a function to alert user
function alertuser() {
  alert("you clicked!");
}
//3.add the function
button.addEventListener("click", alertuser);
