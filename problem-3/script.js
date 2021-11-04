// define a variable to represent an array of numbers 
// define another variable to hold the sorted array 
// obtain the sorted array using the .sort() method

let array = [66, 33, 6, 96, 3, 39, 93]
let sortedArray = array.sort(function(a, b){return a-b});
console.log(sortedArray);

// returns -> [3, 6, 33, 39, 66, 93, 96]