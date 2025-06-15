class MySolution {
  countDownSum(num) {
    // Insert code here;
  
    if(num === 0) {
      return 1;
    } 
    return num + this.countDownSum(num--)
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;