// create a function that add "ay to the end of a string

function pigLatin (str) {
  var result = "";
  for (var i = 1; i < str.length; i++) {
    result += str[i];
  }
  result += str[0];
  result += "ay";
 return result;
};

//create a function that helps it work in the command line
for (var i = 2; i < process.argv.length; i++) {
var str = process.argv[i];
console.log(pigLatin(str));
};