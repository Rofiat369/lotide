const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  //take a sentence as string
  //return a count of letters
   let obj = {}; //create an empty object
   //loop through letters
   const  result = sentence.split(" ").join("");

   for (const letter of result){
     if (obj[letter]){
      obj[letter] += 1;
     } else {
       obj[letter] = 1;
     }
   }
    return obj;

}

let up = countLetters("lighthouse in the house");
console.log(up);