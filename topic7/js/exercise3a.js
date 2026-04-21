function buttonFunc() {

    //this will be executed when button function is executed
    localStorage.removeItem("First Name")
    localStorage.removeItem("Second Name")
}


let container = document.querySelector("div")
let button = document.querySelector("button")


let firstName = localStorage.getItem("First Name")
let secondName = localStorage.getItem("Second Name")

let text = document.createTextNode("Hi " + firstName + " " + secondName)
console.log(text)

container.insertBefore(text, button)

button.addEventListener("click", buttonFunc)