// 1. Reverse a String
// Description: Create a function that takes a string (like "hello") and returns it in reverse order (like "olleh").
// Example: reverseString("hello") should return "olleh".

function reverseString(str) {
  return str.split("").reverse().join("");
} 
console.log(reverseString("hello")); 
