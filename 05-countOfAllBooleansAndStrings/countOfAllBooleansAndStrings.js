function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let numOfbool = 0;
  let numOfstr = 0;

  for(let element of arr) {
    if(typeof element == "string") {
      numOfstr ++;
    } else {
      if(typeof element == "boolean") {
        numOfbool ++;
      }
    }
  }
  return numOfbool + numOfstr;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;