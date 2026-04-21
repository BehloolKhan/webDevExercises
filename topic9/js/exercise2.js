//function used to validate password and confirm password
//
function submitFunction(Event) {

    userPassword = document.getElementById("Password").value;
    userConfirm = document.getElementById("ConfirmPassword").value;

    console.log(userPassword.length);
    console.log(userConfirm.length);

    if (userPassword.length == 0) {

        window.alert("Your Password field cannot blank");
        Event.preventDefault();
    }

    if (userPassword != userConfirm) {

        window.alert("Password and confirm password do not match");
        Event.preventDefault();
    }

}

button = document.querySelector('form');
button.addEventListener("submit", submitFunction);