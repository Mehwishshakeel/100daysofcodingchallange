// Day 8
// Q22:  Intentional Error
var friendsName = ["Ayesha", "Sana", "Sadia"];
console.log(friendsName[4]); // Indexing error
console.log(friendsName[2]); // correcting error
// 23: Answer
// Conditional Tests:
var age = 23;
console.log("Is age == 23? I predict true");
console.log(age == 23);
console.log("Is age == 24? I predict false");
console.log(age == 24);
console.log("Is age >=20? I predict true");
console.log(age >= 20);
console.log("Is age <=20? I predict false");
console.log(age <= 20);
console.log("Is age <=30? O predict true");
console.log(age <= 30);
console.log("Is age <=10?I predict false ");
console.log(age <= 10);
console.log("Is age < 25 I predict true");
console.log(age < 25);
console.log("Is age < 23 I predict false");
console.log(age < 23);
// Q24: Answer
// Tests for equality and inequality with strings
console.log("Testing equality with strings:");
console.log("Apple" == "Apple"); // True
console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple");
// Numerical tests
console.log("Numerical tests:");
console.log(10 < 20);
console.log(1 < 0);
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false);
console.log(true || false);
// Test whether an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("mango"));
