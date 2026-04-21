function buttonFunc() {

    //access the value stores in the first name field
    let firstName = document.getElementById("FirstName").value
    let secondName = document.getElementById("LastName").value

    sessionStorage.setItem("First Name", firstName)
    sessionStorage.setItem("Second Name", secondName)


}

let button = document.querySelector("button")
button.addEventListener("click", buttonFunc)