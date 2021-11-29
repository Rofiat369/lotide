const eqArrays = require('./eqArrays');

const assertArrayEqual = function(array1,array2){
  const result = eqArrays(array1,array2);
  if (!result){
    console.log(`❌ ❌ ❌ These arrays are NOT equal`)
  }
  else {
    console.log(`✅ ✅ ✅ These arrays ARE equal`)
  }
};

module.exports = assertArrayEqual;


