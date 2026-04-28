What is reduce()?

reduce() is an array method used to convert an array into a single value (like sum, object, etc).
 map, filter zyada readable hote hain compared to reduce().

// ✅ 1. Sum of Numbers 
// const numbers = [1, 2, 3, 4, 5]; 
// const sum = numbers.reduce((acc, num) => acc + num, 0); 
// console.log(sum);   

// ✅ 2. Factorial (5!) 
// const nums = [1, 2, 3, 4, 5]; 
// const factorial = nums.reduce((acc, num) => acc * num, 1); 
// console.log(factorial);  

// ✅ 3. Max Number 
// const values = [10, 45, 23, 89]; 
// const max = values.reduce((acc, val) => val > acc ? val : acc); 
// console.log(max);  
 
// ✅ 4. Min Number 
// const values = [10, 45, 23, 89]; 
// const min = values.reduce((acc, val) => val < acc ? val : acc); 
// console.log(min);  

// ✅ 5. Concatenate Words 
// const words = ["Welcome", "to", "our", "platform"]; 
// const sentence = words.reduce((acc, word) => acc + " " + word);
// console.log(sentence);

// ✅ 6. Count Character Occurrences 
// const chars = ['a', 'b', 'a', 'c', 'b']; 
// const frequency = chars.reduce((acc, ch) => { 
//   acc[ch] = (acc[ch] || 0) + 1; 
//   return acc; 
// }, {});
// console.log(frequency); 

// ✅ 7. Flatten Nested Arrays 
// const nested = [[1, 2], [3, 4], [5]]; 
// const flat = nested.reduce((acc, arr) => acc.concat(arr), []); 
// console.log(flat);

// ✅ 8. Sum of Even Numbers 
// const numbers = [1, 2, 3, 4, 5]; 
// const evenSum = numbers.reduce((acc, n) => n % 2 === 0 ? acc + n : acc, 0); 
// console.log(evenSum);

// ✅ 9. Group By Department 
// const employees = [ 
//   { name: "Rita", dept: "HR" }, 
//   { name: "Amit", dept: "IT" }, 
//   { name: "Sara", dept: "HR" } 
// ]; 
// const grouped = employees.reduce((acc, emp) => { 
//   acc[emp.dept] = (acc[emp.dept] || []).concat(emp); 
//   return acc; 
// }, {});

