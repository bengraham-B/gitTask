//~ Used an html file to obtain input from the user
const uiElement = document.querySelector("#ui-element")


const input = prompt("Enter your name:")
uiElement.innerHTML = "Hello " + input 
