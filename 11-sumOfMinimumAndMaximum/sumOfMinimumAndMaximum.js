function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let minValue = nums[0];
  let maxValue = nums[0];
  let sum = 0;

  for(let i = 0; i < nums.length; i++) {  //[2,1,5,3,23]
    if (minValue > nums[i]) {
      minValue = nums[i];
    } 
    if(maxValue < nums[i]){
      maxValue = nums[i];
    }
  }
  sum = minValue + maxValue;
  return sum;
  
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;