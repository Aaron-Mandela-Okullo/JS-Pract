function twoSum(nums, target) {
  const numToIndex = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in numToIndex) {
          return [numToIndex[complement], i];
      }
      numToIndex[nums[i]] = i;
  }
  return null; // This line is theoretically unreachable since we assume there's exactly one solution.
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]
