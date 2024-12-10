function makeSandwich(item:string[]){
    console.log("\nMaking your sandwich with");
    item.forEach(element=>console.log("-" + element));
    console.log("Enjoy your sandwich !\n");
}
makeSandwich(['Hum','Lettuce','Cheese']);
makeSandwich(['Turkey','Bacon']);
makeSandwich(['Peanut butter','Jelly']);