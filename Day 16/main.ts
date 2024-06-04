// Day 16
// Q46:Answer
let laptop ={
    make:"Dell",
    model:"Elite Series",
    year:2023,
     describe: function(){
    console.log(`This laptop is ${this.make} ${this.model} ${this.year}`);
    },
}
laptop.describe();
// Q47:Answer
let laptops = [
    {make:"Apple",model:"Mac book pro",year:2023},
    {make:"hp",model:" Pavilion Aero 13",year:2024},
    {make:"Dell",model:" XPS 13 OLED",year:2022}
]
let [laptop1,laptop2]=laptops
console.log(laptops);
// Q48:Answer
let priceSet1 = [1000,2000,3000];
let priceSet2 = [500,1500,2500];
let combinedPrices = [...priceSet1,...priceSet2].sort((a,b)=>a-b);
console.log(combinedPrices);