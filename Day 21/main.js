// Day 21
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["bike"] = 1] = "bike";
    vehicles[vehicles["Truck"] = 2] = "Truck";
})(vehicles || (vehicles = {}));
console.log(vehicles);
// Showing one type of vehicle from the list
console.log(vehicles.car); // It shows 0 because enums start counting from 0
// Example student data
var Student = {
    name: "Sadia",
    age: 30,
    classes: ["Mathematics", "statistics", "economics"]
};
// Show the result
console.log(Student);
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5,
    height: 10
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 45,
    radius: 6
};
// Showing what we described
console.log(circle);
console.log(rectangle);
