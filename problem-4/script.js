// define a variable to represent our original array
//create a function that will get rid of duplicate elements
//

const array = ["apple", "banana", "Strawberry", "apple", "grapes", "Banana", "strawberry", "blueberries"]

function removeDuplicates(arr){
   let uniqueValues = [];
   for(let i =0; i < arr.length; i++){
       if(!uniqueValues.includes(arr[i].toLowerCase())){
           uniqueValues.push(arr[i].toLowerCase());
       }
    }
    return uniqueValues;
 }

const result = removeDuplicates(array);
console.log(result);

// returns -> ["apple", "banana", "Strawberry", "grapes", "blueberries"]





