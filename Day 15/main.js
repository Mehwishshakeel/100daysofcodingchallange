// Day 15
// Q43:Answer
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Harry Potter", "Hamza", "David"];
// making a copy of original array through .slice()
var copy_magician_names = magician_names.slice();
// modify the copied array to include the great with their names
var copyGreatMagicians = make_great(copy_magician_names);
// show both arrays
show_magicians(magician_names);
show_magicians(copyGreatMagicians);
// Q44:Answer
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items));
}
make_sandwich("Chees", "egg");
make_sandwich("mayo");
make_sandwich("egg", "mayo", "ketchup", "lettuce");
// Q45:Answer
function make_car(manufacturer, model) {
    var optionas = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionas[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    optionas.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
