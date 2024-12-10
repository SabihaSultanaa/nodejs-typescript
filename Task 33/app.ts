let numbers :number[]=[1,2,3,4,5,6,7,8,9];
for(let value of numbers){
    let ordinalEnding:string;
    if(value===1){ordinalEnding='st';}
   else if(value===2){ordinalEnding='nd';}
   else if(value===3){ordinalEnding='rd';}
   else {ordinalEnding='th';}
   console.log(`${value}${ordinalEnding}`);
   }