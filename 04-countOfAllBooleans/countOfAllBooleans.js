function countOfAllBooleans(arr) {
  // Insert code here;
  let numOfBool = 0;
  for (let element of arr) {
    if(typeof element == "boolean") {
      numOfBool++
    }
  }
  return numOfBool;
}

// Do not edit this line;
module.exports = countOfAllBooleans;