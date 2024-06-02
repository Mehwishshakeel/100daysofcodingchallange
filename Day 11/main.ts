// Day 11
// Q31:Answer
let users:string[]=[];
if(users.length === 0){
   console.log("Need to find some new users!!");
}  
//Q32:Answer
// Make a list of five or more usernames called current_users.
let current_users:string[] = ["Ayesha","Sana","Sadia","Areeba"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users:string[] = ["SADIA","Ali","Sadaf","Areeba"];
new_users.forEach((newUser) => {
    if (
      current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
      )
    ) {
      console.log(`${newUser} will need to enter a new username.`);
    } else {
      console.log(`${newUser} is available.`);
    }
  });
  //Q33:Answer
  let numbers = [1,2,3,4,5,6,7,8,9];
  // using loop
  for(let oneNumber of numbers){
    let ordinalEnding:string;
    if(oneNumber === 1){
        ordinalEnding ="st"
    }
    else if(oneNumber === 2){
      ordinalEnding = "nd"
    }
    else if(oneNumber === 3){
        ordinalEnding ="rd"
    }
    else {
        ordinalEnding ="th"
    }
    console.log(`${oneNumber}${ordinalEnding}`)
  }