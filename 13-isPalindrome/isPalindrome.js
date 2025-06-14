function isPalindrome(word) {
  // Insert code here;
  //
  console.log(word,">>>>>This is the word")
  for(let start = 0, end = word.length - 1; start < end ; start++, end--) {
    if(word[start] != word[end]) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;