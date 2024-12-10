"use strict";
let magician = ["herry", "kith", "jhon", "albus"];
function make_great(MagicianArray) {
    for (let i = 0; i < MagicianArray.length; i++) {
        MagicianArray[i] = ' The Great ' + MagicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(value => {
        console.log(value);
    });
}
make_great(magician);
show_magicians(magician);
