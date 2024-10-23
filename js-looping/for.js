// Array of numbers to analyze
const numbers = [10, 25, 35, 42, 55, 65, 75, 85];

// Initialize variables to store results
let sum = 0;
let largestNumber = numbers[0]; // Start with the first number as the largest
const targetNumber = 42;
let targetFound = false; // Flag to track if the target number is found

// For loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  // Add current number to the sum
  sum += num;

  // Check if the current number is larger than the largestNumber
  if (num > largestNumber) {
    largestNumber = num;
  }

  // Check if we found the target number
  if (num === targetNumber) {
    console.log(
      `Target number ${targetNumber} found at index ${i}. Stopping the loop.`
    );
    targetFound = true;
    break; // Stop the loop if the target number is found
  }

  // Log the current number being analyzed
  console.log(`Number at index ${i}: ${num}`);
}

// Output the results after the loop completes
console.log("\nResults:");
console.log(`Sum of all numbers: ${sum}`);
console.log(`Largest number: ${largestNumber}`);
console.log(`Target number ${targetNumber} found: ${targetFound}`);

/* Output:
Number at index 0: 10
Number at index 1: 25
Number at index 2: 35
Target number 42 found at index 3. Stopping the loop.

Results:
Sum of all numbers: 112
Largest number: 42
Target number 42 found: true
*/
