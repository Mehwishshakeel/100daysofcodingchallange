// Day 39
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function daysOfWeeks(day:number):void{
    switch(day){
        case 1:
            console.log("Sunday");
            break;
            case 2:
                console.log("Monday");
                break;
                case 3:
                    console.log("Tuesday");
                    break;
                    case 4:
                        console.log("Wednesday");
                        break;
                        case 5:
                            console.log("Thursday");
                            break;
                            case 6:
                                console.log("Friday");
                                break;
                                case 7:
                                    console.log("Saturday");
    }

}
daysOfWeeks(5);
// Uses a switch statement to select the appropriate day based on the provided number.

// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function seasons(month:number):void{
    switch(month){
        case 1:
        case 2:
        case 3:
            console.log("Winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Summer");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Autumn");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Spring");
            break;


    }
}
seasons(4);
seasons(2);

// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// This function evaluates a grade and logs the corresponding remark
function grades(grade:string):void{
switch(grade){
    case "A":
        console.log("Excellent");
        break;
        case "B":
            console.log("Good");
            break;
            case "C":
                console.log("Fair");
                break;
                case "D":
                    console.log("Need Improvement");
                    break;
                    case "F":
                        console.log("Fail");
                        break;
                        default:
                            console.log("Invalid grade");
                            break;

}
}
grades("F");
grades("default");