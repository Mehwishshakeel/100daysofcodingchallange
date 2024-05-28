// Day 6
// Q16: Answer
let guestListNames:string[] = ["Hafsa","Sadia","Aneela","Anum"];
console.log("Good News!! I found the bigger tabel");
// Add more guest
guestListNames.unshift("Mehwish");
guestListNames.splice(guestListNames.length/2,0,"Rumaisa");
guestListNames.push("Sana");
// print a message
for(let name of guestListNames ){
  console.log(`Hello!! ${name} would you like to join us for dinner`)
}
