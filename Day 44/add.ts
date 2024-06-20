// Day 44
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import {add} from "./main";
console.log(add(4,2));


//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
import { person } from "./main";
const mehwish = new person("Mehwish");
mehwish.greet();


// Question 132: Discuss the difference between default and named exports in JavaScript modules.
// Importing named exports:
import {utilone,utiltwo} from "./main";

// Importing a default export:
import calculator from "./main";
// This code illustrates the syntax and usage differences between default and named exports.
