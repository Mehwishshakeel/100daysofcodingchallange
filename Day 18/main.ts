// Day 18
// Q52:Answer
// Make an object 
let smartPhone ={
    Brand:"Infinix ",
    Model:"note 11",
    spec:{
        storage:"128GB",
        screensize:"6.7 inches",
        Batterylasting:"10-12 hours"
    }
}
console.log(smartPhone);
// Q53:Answer
// make an object of computer programmer skills
let programmerSkills={
    codinglanguages:["Typescript","Python","Javascript"],
    frameworks:["React","Django","Flutter"],
    tools:["Git","Webpack","Docker"],
}
// get three specific skills from the list 
let {codinglanguages,frameworks,tools}=programmerSkills
// Showing a skill from each category
console.log(` Codinglanguages:${ codinglanguages[1]},Frameworks:${ frameworks[2]},Tools:${ tools[0]}`);
// Q54:Answer
// Making Flexible Object Keys
function creatObject(key:string,value:string){
    let dynamicobject={};
    // Setting up a section in the list with a changeable name
    dynamicobject[key]=value;
    return dynamicobject;
}
// Using the flexible list setup for a user's preference
let userPreference=creatObject("theme","light");
// Showing the user's choice
console.log(userPreference);