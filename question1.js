function categorizeArray(arr) {
  const result = {
      evens: [],
      odds: [],
      chars: []
  };

  arr.forEach(item => {
      if (typeof item === 'number') {
          if (item % 2 === 0) {
              result.evens.push(item);
          } else {
              result.odds.push(item);
          }
      } else if (typeof item === 'string' && item.length === 1) {
          result.chars.push(item);
      }
  });

  result.evens.sort((a, b) => a - b);
  result.odds.sort((a, b) => a - b);
  result.chars.sort();

  return result;
}

// Example usage:
const inputArray = [1, 2, 8, 'm', 5, 12, 7, 'c', 18];
const categorized = categorizeArray(inputArray);
console.log(categorized);
