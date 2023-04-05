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



//1. find the div
const buttonContainer = document.querySelector(".button-container")
///2 define changeBGGreen
function changeBGGreen(event)
{
    // console.log(event.target)
    // change the style of event.target to have green bg
    if(event.target.tagName === "BUTTON")
    {event.target.classList.add("greenBg")}
}
//3 add func as event lsitener
buttonContainer.addEventListener("click",changeBGGreen)

// 2. define a functiuon to change textcolor
function changeTextColor(event)
{   if(event.target.tagName === "BUTTON")
    {event.target.style.color = event.target.textContent;}
    // if "red" button is clicked -> the text color should be read
}

// 3. event listner
buttonContainer.addEventListener("click", changeTextColor)

// 1. find the element
// 2. define function
// 3. addEventListener
function addNewElements()
{
    // create new elements -> p and button
    const newButton = document.createElement("button")
    const newp = document.createElement("p")
    newButton.addEventListener("click", changeBGGreen)
    // appened chikd
    document.body.appendChild(newButton)
    document.body.appendChild(newp)
    // add text content
    newp.textContent ="Something"
    newButton.textContent ="Purple"
}
// add event listener
button.addEventListener("click", addNewElements)