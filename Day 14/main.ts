// Day 14
// Q40:Answer
function make_album(title:string,artist:string,tracks?:number){
   let album ={title,artist};
   if(tracks){
    album["tracks"] = tracks
   }
   return album
   }
console.log(make_album("album 1","Artist1"));
console.log(make_album("album 2","Artist 2",123));
console.log(make_album("album 3","artist3"));
// Q41:Answer
let magicians:string[]=["Harry Potter","David","Usman"];
function show_magicians(magicians:string[]){
for(let magician of magicians){
  console.log(`${magician}`);
}
}
show_magicians(magicians);
// Q42:Answer
function make_great(magicians:string[]){
for(let i = 0;i<magicians.length;i++){
magicians [i]= "THE GREAT" +   magicians [i];
}
}
make_great(magicians);
show_magicians(magicians);