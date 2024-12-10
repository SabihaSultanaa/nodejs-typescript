let magician:string[]=["herry", "kith", "jhon", "albus"];




function make_great(MagicianArray:string[]){
    for(let i=0; i<MagicianArray.length; i++){MagicianArray[i]= ' The Great ' + MagicianArray[i]}
}


function show_magicians(magicians:string[]){
    magicians.forEach(value => {console.log(value);

    });
}





make_great(magician);

show_magicians(magician);

