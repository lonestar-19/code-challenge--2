function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers as the first step.
    let result = [];

    // Check if start is less than or equal to end
    if (start <= end) {
        // If true, loop from start to end
        for (let i = start; i <= end; i++) {
            // Add each number to the result array
            result.push(i);
        }
    } else {
        // If start is greater than end, loop from start to end in reverse
        for (let i = start; i >= end; i--) {
            // Add each number to the result array
            result.push(i);
        }
    }

    // Return the generated array, so as to confirm the changes
    return result;
}

// Example usage:
console.log(generateArray(4, 7)); //Generated Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); //Resulting Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
