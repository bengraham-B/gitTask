//~ Used an html file to obtain input from the user
const uiElement = document.querySelector("#ui-element")
const dateTimeDiv = document.querySelector("#date-time")

const input = prompt("Enter your name:")
uiElement.innerHTML = "Hello " + input 
dateTimeDiv.innerHTML = new Date()