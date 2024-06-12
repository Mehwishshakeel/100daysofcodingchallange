// Day 31
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
// Create an array of your three favorite fruits
let favoriteFruits:string[]=["Apple","Mango","Orange"];
// add a new fruit to the end of the array
favoriteFruits.push("Grapes");
console.log(favoriteFruits);


// Question 92: Write a function to remove the last element from an array and return the removed element.
// This function removes the last element from an array and returns it
function removalLastElement<T>(arr:T[]):T|undefined{
 return arr.pop() // removal of last element and return
}
// Example: Removing the last fruit from the array
const fruits:string[]=["Apple","Orange","Cherry"];
console.log(removalLastElement(fruits));// Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.


// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function removeBananaWithMango(fruit:string[]):void{
    const index = fruit.indexOf("Banana"); // Finds the index of "Banana"
    if(index !== -1) fruit[index]="Mango";// Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fruit:string[]=["Apple","Banana","Orange"];
removeBananaWithMango(fruit);
console.log(fruit);// Outputs: ['Apple', 'Mango', 'Cherry']
