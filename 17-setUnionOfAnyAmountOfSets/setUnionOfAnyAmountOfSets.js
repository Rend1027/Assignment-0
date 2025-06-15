function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  console.log("This is args-->",...args)
  let mySet = new Set();

  for(let element of args) {
    console.log(element)
    for(let el of element)
    mySet.add(el);
  }
      console.log("this is my set--->",mySet)

  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;