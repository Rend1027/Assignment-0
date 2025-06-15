function frequencyCounter(word) {
  // Insert code here;
  let obj = {};

  for(let element of word) {
    if(obj[element]) {
      obj[element]++;
    } else (obj[element] = 1)
  }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;