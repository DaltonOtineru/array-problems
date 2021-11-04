// define a function that will accept an array and a number as parameters
// define a variable for the array of the first n elements of the original array
// return cutArray
// run the function

function roots(array, n) {
    let cutArray = array.slice(0, n)
    return cutArray;
}

roots(["baseball", "basketball", "football", "tennis"], 2);

console.log(roots(["baseball", "basketball", "football", "tennis"], 2));

// returns -> ["baseball", "basketball"]