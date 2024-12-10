"use strict";
function make_album(artist, title, tracks) {
    const album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('ATIF ASLAM', 'KUCH IS TRHA');
console.log(album1);
const album2 = make_album('ALI ZAFAR', 'YAARIYAN');
console.log(album2);
const album3 = make_album('SONU NIGAM', 'KAL HO NA HO', 12);
console.log(album3);
