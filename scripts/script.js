// 1.Get a reference to the button - > querySelector
const button = document.querySelector("#ClickMe");
//2. define a function to alert user
function alertuser() {
  alert("you clicked!");
//   button.removeEventListener("click", alertuser);
}
//3.add the function
button.addEventListener("click", alertuser, {once:true});


function changeBGPink()
{
    // document.body.style = "background-color:pink"
    document.body.classList.add("pinkBg");
}
button.addEventListener("click", changeBGPink);

function changeText()
{
    // if it says click me change to clicekd
    // else change it to click me
if(button.textContent === "Click me!"){button.textContent = "clicked!"}
else{button.textContent = "Click me!"}
}
button.addEventListener("click", changeText);