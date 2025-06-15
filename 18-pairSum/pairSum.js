function pairSum(nums, target) { //[5, 3, 1] targer--> 6
  // Insert code here;

  console.log(nums)
  console.log("this is target>>>",target)

  if(nums.length <= 1) {
    throw new Error("error");
  }
  for(let i = 0; i < nums.length; i++) {
    console.log("this is result--->", nums[i] + nums[i + 1])     
    if(nums[i] + nums[i + 1] === target) {
      return true;
    } 
     return false;
  }
}

// Do not edit this line;
module.exports = pairSum;