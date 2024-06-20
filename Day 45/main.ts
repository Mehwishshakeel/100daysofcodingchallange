// Day 45
// Question 133: Write a JavaScript object and convert it into a JSON string.
let person = {
    name:"Ali",
    age:25,
    city:"Lahore",
}
let jsonstring = JSON.stringify(person);
console.log(jsonstring);


// Question 134: Take a JSON string and parse it into a JavaScript object.
let jsonString= `{"name":"Ali","age":25,"city":"Lahore"}`;

let Person = JSON.parse(jsonString);
console.log(person);


// Question 135: Explain how you can format a JSON string with proper indentation for readability.
const personName = {
    name:"Saad",
    age:30,
    city:"Karachi",
}
const JsonString=JSON.stringify(personName,null,2);
console.log(JsonString);

