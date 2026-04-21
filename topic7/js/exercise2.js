//method to be executed when submit button is pressed
function submitFunction(Event) {

    Event.preventDefault(); //making sure the default method that is associated with the event, which is click is not called
    console.log("form didnt submit")

    //now we need to do some input validation
    //
    areBlank()

}

//function to check if email Address field, name field, adress and city are black
function areBlank () {

    let Name = document.querySelector('input[id="name"]')
    let EmailAddress = document.querySelector('input[id="f-email"]')
    let address = document.querySelector('input[id="f-address"]')
    let postCode = document.querySelector('input[id="f-postCode"]')

    if (Name.value.length == 0) {

        window.alert("You cannot have an empty name field")
        Name.style = "background : purple"
        //need to get label associated aswell
        label = document.querySelector('label[for="name"]')
        label.style = "background : purple"
    }

    if (EmailAddress.value.length == 0) {

        window.alert("You cannot have an empty Email Address field")
    } 

    if (address.value.length == 0) {

        window.alert("You cannot have an empty address field")
    } 

    if (postCode.value.length == 0) {

        window.alert("You cannot have an empty post code field")
    }


}

let submitButton = document.querySelector('input[type="submit"]')
submitButton.addEventListener('click', submitFunction)

console.log(submitButton)