function addDigits(num) {
    while (num >= 10) {
        num = sumOfDigits(num);
    }
    return num;
}

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example usage:
console.log(addDigits(38));  // Output: 2
console.log(addDigits(123)); // Output: 6
console.log(addDigits(9));   // Output: 9
