function titleCaseEdit(title) {
  // Insert code here;
  let toLowerCase = title.toLowerCase();
  console.log(toLowerCase);
  toLowerCase = title.split(" ");
  // console.log(toLowerCase[1]);
  for(string of toLowerCase) {
    string[0].toUpperCase;
  }
  return toLowerCase.join(" ")
}

// Do not edit this line;
module.exports = titleCaseEdit;