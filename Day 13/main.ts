// Day 13
// Q37:Answer
function make_shirt(size:string = "large",message:string="I love typescript"){
  console.log(`size of a shirt is ${size} with this message ${message}`)
}
make_shirt();
make_shirt("small","I love Javascript");
make_shirt("Extra small","Coding is life");
//Q38:Answer
function describe_city(city:string="Karachi",country:string="Pakistan"){
console.log(`${city} is in ${country}`);
}
describe_city();
describe_city("Lahore");
describe_city("Toronto","Canada");
//Q39:Answer
function city_country(city:string,country:string):string{
  return `${city},${country}`
}
console.log(city_country("Karachi","pakistan"));
console.log(city_country("Toronto","Canada"));
console.log(city_country("Tokyo","Japan"));