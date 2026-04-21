//used to keep track of the different sources
//
let sources = ["/images/picture1.jpg", "/images/picture2.jpg", "/images/picture3.jpg"]
let current = 0; //used to keep track of the current image we are pointing two

let imageElement = document.getElementById("stadiumImage")


//function to be executed when previous button is clicked:
//
function prevButton(Event) {

    //first we need to check if we can even go back
    if (current == 0) {

        window.alert("You cant go back any more, what are you doing")
        return; //exit early
    }

    current -= 1;
    imageElement.src = sources[current]
}


//function to be executed when next button is clicked:
//
function nextButton(Event) {

    //check if we are at the end of
    if (current == 2) {

        window.alert("You cant go forward anymore, you have reached the end")
        return;
    }

    current+=1;
    imageElement.src = sources[current];
}

//next to link buttons to functions:
//

let previous = document.getElementById("previous")
let next = document.getElementById("Next")

previous.addEventListener("click", prevButton)
next.addEventListener("click", nextButton)