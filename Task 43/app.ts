let magician:string[]=["herry", "kith", "jhon", "albus"];

function copyArray(arr:string[]){
    return[...arr]}


function make_great(MagicianArray:string[]){
    for(let i=0; i<MagicianArray.length; i++){MagicianArray[i]= ' The Great ' + MagicianArray[i]}
}


function show_magicians(magicians:string[]){
    magicians.forEach(value => {console.log(value);

    });
}




const copyMagicianArray=copyArray(magician);
make_great(copyMagicianArray);
console.log('This is my original array');
show_magicians(magician);
console.log('This is my modified copy of array');
show_magicians(copyMagicianArray);

