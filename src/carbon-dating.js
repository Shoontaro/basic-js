const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(Number.isNaN(+sampleActivity) || typeof sampleActivity != 'string' || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY){
      return false;
  }
  
   let res = Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD);
   return Math.ceil(res);   
};


