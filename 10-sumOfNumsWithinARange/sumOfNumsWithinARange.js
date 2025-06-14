function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let counter = 0;

  for(let element of nums) {
    if(element >= start && element <= end) {
      counter ++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;