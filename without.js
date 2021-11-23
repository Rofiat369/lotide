const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1,array2) {
  const result = eqArrays(array1,array2);
  if (!result) {
    console.log(`❌ ❌ ❌ These arrays are NOT equal`);
  } else {
    console.log(`✅ ✅ ✅ These arrays ARE equal`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i <= source.length - 1; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);