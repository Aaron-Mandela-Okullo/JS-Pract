function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Start by assuming the first string is the common prefix
  let prefix = strs[0];

  // Compare this prefix with each string in the array
  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
          // If the current prefix is not found at the start of strs[i],
          // reduce the length of the prefix by one
          prefix = prefix.substring(0, prefix.length - 1);
          if (prefix === "") return "";
      }
  }

  return prefix;
}

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));  // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));  // Output: ""
