function firstPalindrome(words) {
  for (let word of words) {
      if (isPalindrome(word)) {
          return word;
      }
  }
  return "";
}

function isPalindrome(word) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }
  return true;
}

// Example usage:
const words = ["not", "a", "racecar", "palindrome"];
console.log(firstPalindrome(words));  // Output: "racecar"
