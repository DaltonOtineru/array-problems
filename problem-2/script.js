/* 
step 1: define a variable that represents an array of strings 
step 2: define another variable that represents the string we will have after we use the .toString method to join the array into a string 
*/

let array = ["HTML5", "CSS3", "JavaScript", "Ruby", "PHP", "Python"];
let string = array.toString();
console.log(string);

// Returns -> "HTML5,CSS3,JavaScript,Ruby,PHP,Python"