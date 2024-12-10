"use strict";
function storeCarInfo(manyfacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manyfacturer, modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answer);
