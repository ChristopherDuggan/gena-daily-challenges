/*-----------------------------------------------------------------------------
Challenge: 06-range

Difficulty: Basic

Prompt:

- Write a function called range that accepts two integers as arguments and 
  returns an array of integers starting with the first argument up to one 
  less than the second argument.
- The range function must be called with the first argument less than or equal 
  to the second argument; otherwise, return the string "First argument must be 
  less than second".

Examples:

range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------------------*/
// Your solution for 06-range here:


const range = function(int1, int2) {
  if (int1 > int2) return "First argument must be less than second";
  const array = [];
  for (let i = int1; i < int2; i++) {
    array.push(i)
  }
  return array;
};


console.log(range(1,4));
console.log(range(-2, 3));
console.log(range(1,1));
console.log(range(5,2));
