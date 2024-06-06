// Day 21
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
enum vehicles{
    car,
    bike,
    Truck,
}
console.log(vehicles);
// Showing one type of vehicle from the list
console.log(vehicles.car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.

// Q62 - Making a Student Template: 
interface student{
    name:string,
    age:number,
    classes:string[]
}
// Example student data
let  Student:student={
name:"Sadia",
age:30,
classes:["Mathematics","statistics","economics"]
}
// Show the result
console.log(Student);

// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Creating a custom type (type alias) for shapes that could be circles or rectangles
type shape={
kind:"circle"|"rectangle",
radius?:number, // only for circles
height?:number;  // only for rectangles
width?:number;   // only for rectangles

};
// Describing a circle using our Shape type
let circle:shape={
   kind:"circle",
   radius:5,
   height:10
}
// Describing a rectangle using our Shape type
let rectangle:shape={
    kind:"rectangle",
    width:45,
    height:6
}
// Showing what we described
console.log(circle);     // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
