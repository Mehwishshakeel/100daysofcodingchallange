// Day 12
// Q34:Answer
var pizzas = ["Peproni", "Fajita", "Tikka"];
// using for loop
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I rally like ".concat(pizza));
}
;
console.log("I love pizza");
// Q35: Answer
var petAnimals = ["Cat", "Dog", "Rabbit"];
// using for loop
for (var _a = 0, petAnimals_1 = petAnimals; _a < petAnimals_1.length; _a++) {
    var animal = petAnimals_1[_a];
    console.log("".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
// Q36:Answer
// make a function
function make_shirt(size, message) {
    console.log(" The size of the shirt is ".concat(size, " with the message on ").concat(message));
}
make_shirt("large", "Live a happy life");
