// Function to determine age category
function determineAgeCategory(yearOfBirth) {
  const currentYear = new Date().getFullYear(); // Get the current year
  const age = currentYear - yearOfBirth; // Calculate age based on year of birth

  if (age < 18) {
      return 'You are a minor.';
  } else if (age >= 18 && age <= 36) {
      return 'You are a youth.';
  } else {
      return 'You are an elder.';
  }
}

// Prompt the user for their year of birth
const userYearOfBirth = parseInt(prompt("Enter your year of birth:"), 10);

// Validate input and ensure it's a valid number
if (!isNaN(userYearOfBirth) && userYearOfBirth > 0) {
  const message = determineAgeCategory(userYearOfBirth);
  console.log(message); // Print the result to the console
} else {
  console.log('Invalid input. Please enter a valid year.');
}
