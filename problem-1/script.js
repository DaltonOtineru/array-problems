// define a function that will accept an array and a number as parameters
// define a variable for the array of the first n elements of the original array
// console log the array produced when running the function 
// run the function

function roots(array, n) {
    let cutArray = array.slice(0, n)
    console.log(cutArray)
}
roots(["baseball", "basketball", "football", "tennis"], 2);

// returns -> ["baseball", "basketball"]