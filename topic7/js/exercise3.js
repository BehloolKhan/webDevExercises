function buttonFunc() {

    //access the value stores in the first name field
    let firstName = document.getElementById("FirstName").value
    let secondName = document.getElementById("LastName").value

    localStorage.setItem("First Name", firstName)
    localStorage.setItem("Second Name", secondName)


}

let button = document.querySelector("button")
button.addEventListener("click", buttonFunc)