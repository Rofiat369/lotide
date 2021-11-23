// Using for-loop to reverse strings
//created an empty string for the new word
// created another for loop that reverse the word
//This for loop goes through the word
// created a variable that took arg

const args = process.argv;

const reversedString = function(args) {
  for (let str = 2; str < args.length; str++) {
    let revstr = "";
    for (let j = args[str].length - 1; j >= 0; j--) {
      revstr += args[str][j];
    }
    console.log(revstr);
  }
};
reversedString(args);