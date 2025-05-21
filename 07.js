/*-----------------------------------------------------------------------------
Challenge: 07-reverseUpcaseString

Difficulty: Basic

Prompt:

- Write a function called reverseUpcaseString that accepts a single string 
  argument.
- The reverseUpcaseString function should return the string with its characters 
  in reverse order and convert all characters to uppercase.

Examples:

reverseUpcaseString("SEI Rocks!") //=> "!SKCOR IES" 
-----------------------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

const reverseUpcaseString = function(string) {
  return string.split('').reverse().join('').toUpperCase();
};

console.log(reverseUpcaseString("this is the thing"));

