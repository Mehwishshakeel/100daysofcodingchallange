// Day 7
// Q19: Answer
let guestListName:string[] = ["Rumaisa","Dua","Hafsa"];
// print a message indicating the number of people you are inviting to dinner.
console.log(` I am inviting ${guestListName.length} persons to dinner`);

//  Q20 - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 let placesToVisit:string[]= ["Canada","Turkey","Japan","India","America"];
 console.log("Places I would like to visit:", placesToVisit);
 // Q21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 let course:{ Coursetitle:string, ID:number, Onsite:true}={
      Coursetitle:"Typescript",
      ID:  44455789,
      Onsite:true
 }
 console.log(`CourseInfo:${course.Coursetitle}, Student ID:${course.ID}, Is student onsite:${course.Onsite}`);

 