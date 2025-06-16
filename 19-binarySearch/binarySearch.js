class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
fdfasdf
  binarySearch(nums, target) {
    // Insert code here;
    //         target----> 2
    //           [1  ,   2,   3,   4,   5,   6]
    //            0      1    2    3    4    5
    //  index--> start       mid            end  

    let foundTarget = false;
    let start = 0;
    let end = nums.length - 1;
    

    while(start <= end) {
      let mid = Math.floor(((end + start)/ 2));
    if( nums[mid] === target ) {
      return true;
    }
    if(nums[mid] > target) {
       end = mid - 1;
       
    } else {
      start = mid + 1;
      
    }
    }
    return false
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;