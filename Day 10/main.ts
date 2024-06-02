// Day 10
// Q28: Answer
// make a variable
let age:number = 67;
if(age < 2 ){
    console.log("You are a baby!!");
} else if(age <= 4){
    console.log("You are a toddler");
} else if(age <=13){
    console.log("You are a kid");
} else if(age <=20){
    console.log("You are a teenager");
} else if(age <= 65){
    console.log("You are an adult");
} else if(age > 65){
    console.log("You are an elder");
}
// Q29:Answer
// make an array of your favourite fruits

let favorite_fruits = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("You really like apples!");
}
if(favorite_fruits.includes("cherries")){
   console.log("You really like cherries!");
}
if(favorite_fruits.includes("Orange")){
    console.log("Ypu really like Orange!");
}
// Q29:Answer
let Names:string[]=["Sadia","Sana","Ayesha","admin","Maryam"];
Names.forEach((Name) =>{
    if(Name === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello!!,${Name},thank you for loggin in again.`);
    }
})
