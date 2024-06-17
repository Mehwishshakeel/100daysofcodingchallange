// Day 37
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Checks the current hour and logs "Good Morning" if it's before 12 PM
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
;
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function studentsGrading(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 60 && score <= 69) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(studentsGrading(78));
console.log(studentsGrading(45));
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age <= 13) {
        return "Child";
    }
    else if (age <= 20) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(67));
console.log(categorizeAge(12));
