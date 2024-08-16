function firstPalindrome(words) {
  for (let word of words) {
      if (word === word.split('').reverse().join('')) {
          return word;
      }
  }
  return "";
}
// Example usage:
const words = ["not", "a", "racecar", "palindrome"];
console.log(firstPalindrome(words));  // Output: "racecar"
