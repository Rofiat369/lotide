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

let re = letterPositions("lighthouse in the house");
console.log(re);