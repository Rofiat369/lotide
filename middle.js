const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');

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

module.exports = middle;