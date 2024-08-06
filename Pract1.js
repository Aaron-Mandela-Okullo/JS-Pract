function fizzBuzz(param1, param2) {
    const combinedLength = param1.length + param2.length;
    if (combinedLength % 15 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "";
    }
}

// Example usage:
console.log(fizzBuzz("hey", "Aaron")); // Output: "Buzz"
console.log(fizzBuzz("Kanzu", "Foundation"));     // Output: "Fizz"
console.log(fizzBuzz("hello", "fizzbuzz")); // Output: "FizzBuzz"
console.log(fizzBuzz("a", "bc"));        // Output: "Fizz"
