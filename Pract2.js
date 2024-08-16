function determineAgeGroup() {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = prompt("Please enter your year of birth:");

    if (yearOfBirth === null || yearOfBirth.trim() === "" || isNaN(yearOfBirth)) {
        console.log("Invalid input. Please enter a valid year of birth.");
        return;
    }

    const age = currentYear - parseInt(yearOfBirth);

    if (age < 0) {
        console.log("You entered a future year. Please enter a valid year of birth.");
    } else if (age < 18) {
        console.log("You are a minor.");
    } else if (age <= 36) {
        console.log("You are a youth.");
    } else {
        console.log("You are an elder.");
    }
}

// Call the function to prompt the user and determine their age group
determineAgeGroup();

