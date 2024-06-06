// Day 20
// Q58 - Write a simple program that can take lots of scores and find their average
function averageScore(...scores:number[]) {
// Adds all scores together and divides by the number of scores
let total=scores.reduce((sum,score)=>sum+score,0);
return total/scores.length;
}
// show the average result
console.log(averageScore(10,20,30,40));
// We add up all the scores, then divide by how many there are.


// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function creatAdder(valueToAdd:number):(number) => number{
// This is the magic box. It takes a number and adds your special number to it
return function(number:number):number {
    return number+valueToAdd
};
}
// Making a magic box that adds 5
let addSix=creatAdder(6);
console.log(addSix(10));// If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.


// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// Interface to define user profile structure
interface UserProfile{
name:string,
age:number
}
// Create a self-initializing user profile object
const UserProfile= {
name:"Mehwish",   
age:30
}
// Access user information
console.log(`Name:${UserProfile.name},Age:${UserProfile.age}`);