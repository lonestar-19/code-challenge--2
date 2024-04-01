// Define isPrime function
function isPrime(n) {
    // the n tag function takes the  single parameter to be checked for any primal traits .
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Define the extractPrimes function
function extractPrimes(arr) {
// The arr tag takes an array of numbers as an inputand in that case returns a new array with prime numbers only
    const primes = [];
    for (let num of arr) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = extractPrimes(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
