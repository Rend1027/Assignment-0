function pairSum(nums, target) { //[5, 3, 1] targer--> 6
  // Insert code here;
  if(nums.length <= 1) {
    throw new error("battery assist")
  }
  for(let i = 0; i < nums.length; i++) {
    for(let j = 1; i < nums.length; i++) {
      if(nums[i] + nums[j] === target) {
        return true;
      }
    }
  } return false;
  
}

// Do not edit this line;
module.exports = pairSum;