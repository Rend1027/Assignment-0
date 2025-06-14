function fizzBuzz(start, end) {
  // Insert code here;

  //we need to populate an array with elements from Start to Finish variables;
  //we need to iterate through the array and check if it matches any of
  // the conditions.
  // replace element with according string depending on the condition,
  //start = 5 and end = 10

// [5, 6]

  let array = [];
  
for(let num = start; num <= end; num++) {
  if(num % 3 == 0 && num % 5 == 0) {
    array.push("FizzBuzz")
  } else if(num % 3 == 0) {
    array.push("Fizz");
  } else if(num % 5 == 0) {
    array.push("Buzz")
  } else (array.push(num))
}
return array;
}

// Do not edit this line;
module.exports = fizzBuzz;