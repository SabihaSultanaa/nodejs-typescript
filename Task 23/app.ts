let car: string='subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car=='subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car==='subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !=='honda');

console.log("Is car !== 'ford'? I predict True.");
console.log(car !=='ford');

console.log("Is car.uppercase === 'SUBARU'? I predict True.");
console.log(car.toUpperCase()==='SUBARU');

// now these tests evaluate to false
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !=='subaru');

console.log("Is car === 'SUBARU'? I predict False.");
console.log(car ==='SUBARU');

console.log("Is car === 'train'? I predict False.");
console.log(car ==='train');

console.log("Is car === 'bus'? I predict False.");
console.log(car ==='bus');

console.log("Is car === 'cycle'? I predict True.");
console.log(car ==='cycle');
