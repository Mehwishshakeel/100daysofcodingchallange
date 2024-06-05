// Day 17
// Q49:Answer
// MAke a function with rest parameters
function Hobbies(...hobbies:string[]){
    // using a loop 
for(let hobby of hobbies){
   console.log(`I enjoy ${hobby} `);
}
}
// Calling a function
Hobbies("reading","shopping");
Hobbies("sleeping");
Hobbies("watching netflix");
// Q50:Answer
// multiline template literals:
let myIdealDay = `My ideal day would involve:
1. Waking up early perform prayer first.
2. Do some coding 
3. at the end of the day i prefer to do some reading.`;
// Now console multiline tamplate literals
console.log(myIdealDay);
// Q51:Answer
// Refactoring to Arrow Functions: 
// original function to calculate an area
function calculateArea(width:number,height:number):number{
   return width*height
}
// refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number =>
    width * height;
  // Example usage of the arrow function
  console.log(calculateAreaArrow(10, 8)); // Logs the area of the rectangle



