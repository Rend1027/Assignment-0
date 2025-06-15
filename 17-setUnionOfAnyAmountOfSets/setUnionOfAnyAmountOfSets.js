function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let mySet = new Set();

  for(let element of args) {
    mySet.add(element);
  }
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;