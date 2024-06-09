// Day 27
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
let car = {
    make:"Toyota",
    model:"corolla",
    year: 2023
}
console.log(car.year);

// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
  // adding new properties to existing car object 
  let Car:{
    make:string;
    model:string;
    year:number;
    color:string;
  } ={
    make:"Toyota",
    model:"corolla",
    year:2020,
    color:"black"
}
Car.color="blue";
Car.year=2021;
console.log(Car);
  
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function objectProperties(object:object){
    for(let property in object){
  console.log(`${property}:${object[property]}`);
    }
}
// Using the function with a car object
objectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue",
  });
  // It tells us each piece of information stored about the car.