function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
      if (seen.has(num)) {
          return true;  // Duplicate found
      }
      seen.add(num);
  }

  return false;  // All elements are distinct
}

// Example usage:
const nums1 = [2, 4, 7, 9, 10];
const nums2 = [4, 7, 10];

console.log(containsDuplicate(nums1));  // Output: false
console.log(containsDuplicate(nums2));  // Output: true
