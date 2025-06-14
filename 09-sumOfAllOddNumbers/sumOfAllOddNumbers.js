function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let counter = 0;

  for(let element of nums) {
    if(element % 2 != 0) {
      counter ++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;