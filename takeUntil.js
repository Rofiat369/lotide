const takeUntil = function(array, callback){
  const results = []; //create an empty array for for the new array
  for (let arr of array){ //loop through every character in the array
    // for every character in the array we want to check if it meets the callback condition
    if ( callback(arr) === false){ //if it does meet the callback condition //which is one less than 0 or equals to a comma
      results.push(arr); //if condition is false push it to the new array
    } else { //if it does meet the callback arguement
      break; //stop looping and return the result
    }
  }
return results
 
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

//[ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//[ 'I\'ve', 'been', 'to', 'Hollywood' ]