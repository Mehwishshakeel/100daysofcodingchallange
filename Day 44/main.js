"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utiltwo = exports.utilone = exports.person = exports.add = void 0;
// Day 44
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// in file main.ts
var add = function (a, b) { return a + b; };
exports.add = add;
// This line exports an add function from main.ts
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.greet = function () {
        console.log("Hello!! my name is ".concat(this.name));
    };
    return person;
}());
exports.person = person;
;
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
var utilone = function () {
    /*....*/
};
exports.utilone = utilone;
var utiltwo = function () {
    /*.....*/
};
exports.utiltwo = utiltwo;
var calculator = /** @class */ (function () {
    function calculator() {
    }
    return calculator;
}());
exports.default = calculator;
