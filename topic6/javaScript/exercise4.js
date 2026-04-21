
let array = [1, 2, 6, 4]

function arrayFunction(array) {

    //calculate median of array
    let total = 0;
    for (i = 0; i < array.length; ++i) {

        total += array[i];
    }

    console.log(total/array.length) //array average

    //outputting median length
    //first they must be in order, cba
    //

    if (array.length % 2 == 0) {

        let median = array.length/2
        console.log((array[median - 1] + array[median]) / 2)
    }

    else {

        let median = Math.floor(array.length / 2)
        console.log(array[median])
    }

}

arrayFunction(array)