var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Day 16
// Q46:Answer
var laptop = {
    make: "Dell",
    model: "Elite Series",
    year: 2023,
    describe: function () {
        console.log("This laptop is ".concat(this.make, " ").concat(this.model, " ").concat(this.year));
    },
};
laptop.describe();
// Q47:Answer
var laptops = [
    { make: "Apple", model: "Mac book pro", year: 2023 },
    { make: "hp", model: " Pavilion Aero 13", year: 2024 },
    { make: "Dell", model: " XPS 13 OLED", year: 2022 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptops);
// Q48:Answer
var priceSet1 = [1000, 2000, 3000];
var priceSet2 = [500, 1500, 2500];
var combinedPrices = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
