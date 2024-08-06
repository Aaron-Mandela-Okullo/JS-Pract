function fizzBuzz(str1, str2) {
  // Combine the lengths of the two input strings
  const combinedLength = str1.length + str2.length;

  // Check for divisibility and return the appropriate string
  if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
      return 'FizzBuzz';
  } else if (combinedLength % 3 === 0) {
      return 'Fizz';
  } else if (combinedLength % 5 === 0) {
      return 'Buzz';
  } else {
      return ''; // Return an empty string if none of the conditions are met
  }
}

// Example usage:
console.log(fizzBuzz('Hey', 'Aaron')); // Depending on lengths, it will return 'Fizz', 'Buzz', or 'FizzBuzz'
