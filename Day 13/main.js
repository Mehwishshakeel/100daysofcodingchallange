// Day 13
// Q37:Answer
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("size of a shirt is ".concat(size, " with this message ").concat(message));
}
make_shirt();
make_shirt("small", "I love Javascript");
make_shirt("Extra small", "Coding is life");
//Q38:Answer
function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city();
describe_city("Lahore");
describe_city("Toronto", "Canada");
//Q39:Answer
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
console.log(city_country("Karachi", "pakistan"));
console.log(city_country("Toronto", "Canada"));
console.log(city_country("Tokyo", "Japan"));
