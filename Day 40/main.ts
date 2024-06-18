// Day 40
// Question 118: Write a loop that logs numbers from 1 to 10 to the console.
for( let i = 1; i<=10;i++){
  console.log(i)
}

// Question 119: Create a while loop that logs "Hello, World!" 5 times.
let number = 0
while(number <5){
  console.log("Hello World!!");
  number++
}

// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Defines an array of favorite movies
let fvrtMovies:string[]=["Atlas","Harry pottar","Megan"];
for(let movie of fvrtMovies){
    console.log(movie);
}