class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
  binarySearch(nums, target, start=0, end=nums.length - 1) {
    // Insert code here;
    //                       target----> 1
    //                   [1  ,    2,     3,   4,   5,   6]
    // index-->           0       1      2    3    4    5
    //                   start   mid                 
    //                    end           
    //                    

    if(end < start ) {
      return false
    }
    let mid = Math.floor((start + end) / 2);

    if(nums[mid] === target) {
      return true;
    }
    if(nums[mid] > target) {
      end = mid - 1;
      return this.binarySearch(nums, target, start , end) //
    }
    
    if(nums[mid] < target) {
      start = mid + 1;
      return this.binarySearch(nums, target, start , end)
    }

  }
}
//                     start         mid           finish
// in the first call---> [1  ,   2,   3,   4,   5,   6]
//                start              end
// second call---> [3,    4,    5,    6]
//              start         end
// third call--> [4,      5,     6]

// fourth call---> [ 5,     6]
//                start    end
//                 mid
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;