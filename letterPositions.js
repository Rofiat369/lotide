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

const letterPositions = function(sentence){
  const results = {};
  //const  returned = sentence.split(" ").join("");
  for (let index = 0; index < sentence.length; index++){
    // We get the letter in that index
    let letter = sentence.charAt(index);
    if(letter !== ' '){
      //if letter is already in the object
      if (results[letter]){
        //push index into array
        results[letter].push(index)
        // if letter is not already in the object
        } else {
          //Create a key for the letter in the object and put an array as the value for the key with the index in the array
          results[letter] = [index]
        }
    }
    
  }
  return results;
}

console.log(assertArraysEqual(letterPositions("lighthouse in the house").i,[1,11]));