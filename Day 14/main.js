// Day 14
// Q40:Answer
function make_album(title, artist, tracks) {
    var album = { title: title, artist: artist };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("album 1", "Artist1"));
console.log(make_album("album 2", "Artist 2", 123));
console.log(make_album("album 3", "artist3"));
// Q41:Answer
var magicians = ["Harry Potter", "David", "Usman"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("".concat(magician));
    }
}
show_magicians(magicians);
// Q42:Answer
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "THE GREAT" + magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians);
