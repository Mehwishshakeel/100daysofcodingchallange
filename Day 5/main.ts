// Day 5

// 13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 let transportations:string[]= ["Honda motorcycle","Bike","Car","Cycle"];
 for(let name of transportations){
     console.log(`I would like to own a ${name}`)   
 }

 // Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

 let guestListNames:string[] = ["Rumaisa","Dua","Hafsa"];
 for(let name of guestListNames){
    console.log(`Hi!! ${name }, I would like to invite you at dinner`);
 }

 // Q14: Answer
 let guestListName:string[] = ["Rumaisa","Dua","Hafsa"];
 for(let name of guestListNames){
    console.log(`Hi!! ${name }, I would like to invite you at dinner`);
 }
 // Q15: Answer
// Cant join us forr dinner
 let guestCantCome = "Rumaisa";
 console.log(`${guestCantCome} cant join us for dinner`);
 // Now replacing her with another guest
 guestListName.shift()
 guestListName.unshift("Ayesha");
 
 // New Invitation
 for(let name of guestListName){
    console.log(`Hi!! ${name }, I would like to invite you at dinner`);
 }
 
