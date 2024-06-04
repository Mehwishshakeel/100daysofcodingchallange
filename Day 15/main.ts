// Day 15
// Q43:Answer
function show_magicians(magicians:string[]){
magicians.forEach(name=>console.log(name));
}
function make_great(magicians:string[]){
 return magicians.map(name =>`The great ${name}`);
}
let magician_names:string[]=["Harry Potter","Hamza","David"];
// making a copy of original array through .slice()
let copy_magician_names=magician_names.slice();
// modify the copied array to include the great with their names
let copyGreatMagicians = make_great(copy_magician_names);
// show both arrays
show_magicians(magician_names);
show_magicians(copyGreatMagicians);
// Q44:Answer
function make_sandwich(...items:string[]){
console.log(`making a sandwich with: ${items}`);
}
make_sandwich("Chees","egg");
make_sandwich("mayo");
make_sandwich("egg","mayo","ketchup","lettuce");
// Q45:Answer
function make_car(
    manufacturer:string,
    model:string,
    ...optionas:[string,any][]
){
    let car = {manufacturer,model};
    optionas.forEach(([key ,value]) =>(car[key]=value));
    return car
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
