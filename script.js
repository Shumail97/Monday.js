function largestOfFour(arr) {
    // Create an array to hold the largest numbers
    const largestNumbers = [];

    // Iterate through each sub-array
    for (let i = 0; i < arr.length; i++) {
        // Initialize a variable to hold the largest number in the current sub-array
        let largest = arr[i][0]; // Start with the first element

        // Iterate through the current sub-array
        for (let j = 1; j < arr[i].length; j++) {
            // If the current element is larger than the largest found so far
            if (arr[i][j] > largest) {
                largest = arr[i][j]; // Update largest
            }
        }

        // Add the largest number found in the current sub-array to the result array
        largestNumbers.push(largest);
    }

    return largestNumbers; // Return the array of largest numbers
}

// Example usage:
const inputArray = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
const result = largestOfFour(inputArray);
console.log(result); 
