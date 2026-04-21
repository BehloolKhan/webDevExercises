function buttonFunc() {

    //this will be executed when button function is executed
    sessionStorage.removeItem("First Name")
    sessionStorage.removeItem("Second Name")
}


let container = document.querySelector("div")
let button = document.querySelector("button")


let firstName = sessionStorage.getItem("First Name")
let secondName = sessionStorage.getItem("Second Name")

let text = document.createTextNode("Hi " + firstName + " " + secondName)

container.insertBefore(text, button)
button.addEventListener("click", buttonFunc)