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

const middle = function(arr){
  
  let newArr = [];
  if (arr.length <= 2 && arr.length > 0){
    //   console.log("The array has only 1 or 2 elements") 
  } else if (arr.length % 2 === 0){
      newArr =[arr[(arr.length/2)-1],arr[arr.length/2]]
    //   console.log("The array has an even number of elements"); 
  } else if (arr.length % 2 !== 0){
      newArr = [arr[Math.floor(arr.length/2)]]
    //   console.log("The array has an odd number of elements")
  }
  return newArr;  
}

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));