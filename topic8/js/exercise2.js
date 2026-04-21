
function ButtonFunction(Event) {

    //access value in date field:
    let date = document.getElementById('DOB')

    if (date.value == "") {
        
        window.alert("Please Enter a date")
        Event.preventDefault()
    }

}


let form = document.querySelector('form')
form.addEventListener('submit', ButtonFunction)