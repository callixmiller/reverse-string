function reverseString(str) {
  return str.split("").reverse().join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'yad'");
  console.log("=>", reverseString("day"));

  console.log("Expecting: 'yppah'");
  console.log("=>", reverseString("happy"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
Create a function that accepts a string and returns the string text backwards.
*/
// And a written explanation of your solution
/*
reverseString accepts an argument of a string.
  the string is changed into an array with spilt and the letters are spaced out from each other
    the array values are reassembled backwards with the reverse value
      the array is joined together to return the letters back into a string
*/