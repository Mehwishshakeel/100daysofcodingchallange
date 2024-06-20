"use strict";
// Day 44
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
console.log((0, main_1.add)(4, 2));
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
var main_2 = require("./main");
var mehwish = new main_2.person("Mehwish");
mehwish.greet();
