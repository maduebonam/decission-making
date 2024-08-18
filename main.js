//Decision Making (if-else and switch): ( choose at least 2 tasks from below)

//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

//Leap Year Checker using if-else
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Example usage
const year = 2024;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);

//Leap Year Checker using switch-case
function isLeapYear(year) {
    switch (true) {
        case (year % 400 === 0):
            return true;
        case (year % 100 === 0):
            return false;
        case (year % 4 === 0):
            return true;
        default:
            return false;
    }
}

// Example usage
const year = 2024;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);


//Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
//Children (age <= 12): $10
//Teenagers (age 13-17): $15
//Adults (age >= 18): $20
//Ticket Pricing using if-else

function getTicketPrice(age) {
    if (age <= 12) {
        return 10; // Children
    } else if (age >= 13 && age <= 17) {
        return 15; // Teenagers
    } else if (age >= 18) {
        return 20; // Adults
    } else {
        return "Invalid age";
    }
}

// Example usage
const age = 16;
console.log(`The ticket price for age ${age} is $${getTicketPrice(age)}`);


//Ticket Pricing using switch
function getTicketPrice(age) {
    switch (true) {
        case (age <= 12):
            return 10; // Children
        case (age >= 13 && age <= 17):
            return 15; // Teenagers
        case (age >= 18):
            return 20; // Adults
        default:
            return "Invalid age";
    }
}

// Example usage
const age = 16;
console.log(`The ticket price for age ${age} is $${getTicketPrice(age)}`);



//Recursion: 
//Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. 
//The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {
    // Base cases: the first two numbers of the Fibonacci sequence are 0 and 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
const n = 6; // Change this value to get the nth Fibonacci number
console.log(`Fibonacci number at position ${n} is ${fibonacci(n)}`);


//Recursion:                                                          
//Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
    // Helper function to clean the string by removing spaces, punctuation, and converting to lowercase
    function cleanString(s) {
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }

    // Base case: if the string is empty or has one character, it is a palindrome
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }

        // Recursive case: check the characters at the current positions, then move inward
        if (s[left] !== s[right]) {
            return false;
        }

        return checkPalindrome(s, left + 1, right - 1);
    }

    // Clean the string and then check if it is a palindrome
    const cleanedStr = cleanString(str);
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Example usage
const inputString = "A man, a plan, a canal, Panama!";
console.log(`Is the string "${inputString}" a palindrome? ${isPalindrome(inputString)}`);
