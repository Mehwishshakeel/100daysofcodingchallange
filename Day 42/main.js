// Day 42
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
// Defines an object with a name property and a method to return its name
var person = {
    name: "Mehwish",
    getName: function () {
        return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName());
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
// An object with multiple properties and a method that interacts with them using 'this'
var rectangle = {
    length: 7,
    width: 5,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea());
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
// Demonstrates 'this' behavior change in a nested function
var myObject = {
    property: "value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
myObject.outerMethod();
