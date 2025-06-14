function titleCaseEdit(title) {
  // Insert code here;
  // initialize a variable to buld up-- empty string.
  //title is a string I need assess to the first element of each string.
  //use split using space as the seperator
  // Now we have a an array where each word is an element
  // Now i need to access the first index of each element
  // we can use a loop but what kind?
  // use for of loop to iteriate thru the array.
  // but we also have to iterate thru each element[0].
  // then we have to convert the first elemnt of each word to upperCase
  // then we have to push the upperCase element to the empty string
  // we also have to push the rest of the word.
  // return build up variable.

                               // title = "the alchemist"
 let strArr = title.split(" "); // [the, alchemist]

 let tempArray = strArr.map(word => word[0].toUpperCase() + word.slice(1));// [The, Alchemist]

 return tempArray.join(" "); // "The Alchemist"


}

// Do not edit this line;
module.exports = titleCaseEdit;