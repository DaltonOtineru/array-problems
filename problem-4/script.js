// define a variable to represent our original array
//create a function that will get rid of duplicate elements
//

let array = ["apple", "banana", "Strawberry", "apple", "grapes", "Banana", "strawberry", "blueberries"]

function removeDuplicates(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if( i !== j){
            if(array[i].toLowerCase() === array[j].toLowerCase()){
                array.splice(j, 1)
                }
            }
        }
    }
  return array;
}
let result = removeDuplicates(array);
console.log(result);

// returns -> ["apple", "banana", "Strawberry", "grapes", "blueberries"]
        



