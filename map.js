const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

function eqArrays(arr1,arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1,array2){
  const result = eqArrays(array1,array2);
  if (!result){
    console.log(`❌ ❌ ❌ These arrays are NOT equal`)
  }
  else {
    console.log(`✅ ✅ ✅ These arrays ARE equal`)
  }
};


const colors = ["blue", "red", "pink", "yellow", "black"];
const results1 = map(colors, color => color[0]);
console.log(assertArraysEqual(results1, ["b", "r", "p", "y", "b"]));