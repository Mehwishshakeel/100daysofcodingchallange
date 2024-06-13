// Day 33
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// This function formats the current date as DD-MM-YYYY
function currentDateFormatted():string{
const now = new Date();
const day = String(now.getDate()).padStart(2,"0"); // Ensures the day is two digits
const month=String(now.getMonth()+1).padStart(2,"0"); // Adds 1 because months are 0-indexed
const year=String(now.getFullYear());
return `${day}-${month}-${year}`;
}
console.log(currentDateFormatted());// Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.

// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Calculates how many days are left until New Year's Day
function daysUntillNewYear():number{
    const today = new Date();
    const newyear = new Date(today.getFullYear() +1,0,1);// January 1st of next year
    const diff = newyear.getTime()-today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
console.log(daysUntillNewYear() + " days untill New Year.");
// Tells us how many days there are until the next New Year's Day.

// Question 99: Generate a date object representing your next birthday and log it to the console.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month:number,day:number):Date{
    const today = new Date();
    let year = today.getFullYear();
    const Birthday = new Date(year , month-1,day);// Months are 0-indexed
    if(Birthday<today){
         // If the birthday this year has already passed, use next year's date
         Birthday.setFullYear(year+1);
    }
    return Birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(12,11);// Example: December 25th
console.log("Next Birthday on:" ,nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
