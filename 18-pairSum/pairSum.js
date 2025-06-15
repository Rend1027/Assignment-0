function pairSum(nums, target) { //[5, 3, 1] targer--> 6
  // Insert code here;

  console.log(nums)
  console.log("this is target>>>",target)

  if(nums.length <= 1) {
    throw new Error("error");
  }
  for(let i = 1; i < nums.length; i++) {
    console.log("this is result--->", nums[0] + nums[i])
        //5       
    if(nums[0] + nums[i] === target) {
      return true;
    } 
     return false;
  }
}

// Do not edit this line;
module.exports = pairSum;