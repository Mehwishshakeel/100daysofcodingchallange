"use strict";
// Day 41
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips the rest of the loop for i = 5
    }
    console.log(i); // Logs numbers 1-4 and 6-10
} // It demonstrates how to use 'continue' to skip a specific iteration.
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
    if (count === 5) {
        // This while loop counts down from 10 to 1 and stops at 5
        break;
    }
}
// Logs the countdown from 10 but stops abruptly when it hits 5.
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzaygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.
