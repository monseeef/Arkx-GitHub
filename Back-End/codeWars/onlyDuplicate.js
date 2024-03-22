function onlyDuplicates(str) {
  // your code here
  let list = {};
  for (const char of str) {
    list[char] = (list[char] || 0) + 1;
  }
  let res = "";
  for (const char of str) {
    if (list[char] > 1) {
      res = res + char;
    }
  }
  return res;
}
console.log(onlyDuplicates("mmoonsifo"));
