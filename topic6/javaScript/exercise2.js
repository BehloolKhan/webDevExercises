let array = new Array(5)
//we creating 

for (i = 0; i < 5; ++i) {

    array[i] = parseInt(window.prompt("Enter number: "))
}


window.alert("Max number is : " + Math.max(...array))