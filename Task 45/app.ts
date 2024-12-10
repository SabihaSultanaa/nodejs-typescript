function storeCarInfo(manyfacturer:string,modelName:string, ...extraOption:{[key:string]:any}[]): object{
    const carInfo={manyfacturer,modelName,...Object.assign({}, ...extraOption)}
    return carInfo;

};
let answer=storeCarInfo('Honda', 'Civic', {color:'black'},{features:['Navigation','Power window']})
console.log(answer);