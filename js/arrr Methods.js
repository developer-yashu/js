// 1 Empty Array me Data Insert Karna (Dynamic Data Handling) 

// Kabhi-kabhi hume ek empty array ko dynamically fill karna hota hai, jaise kisi form ka data collect karna ya API se data fetch karke store karna. 
// let students = []; 
// students.push("Aman"); 
// students.push("Rohit"); 
// students.push("Priya"); 
// console.log(students);   
// Output: ["Aman", "Rohit", "Priya"] 


//2 Multiple Elements Ek Saath Add Karna 
// Agar ek saath multiple values add karni ho, toh push() use kar sakte hain. 

// let colors = ["Red", "Green"]; 
// colors.push("Blue", "Yellow", "Pink");
// console.log(colors); 

// Output: ["Red", "Green", "Blue", "Yellow", "Pink"] 

// ✅ Kaam: Jab bulk insert karna ho, jaise kisi database array me new entries add karni ho. 

// 3  Stack Data Structure Implement Karna (LIFO - Last In, First Out) 

// push() aur pop() ka combination stack (LIFO) implement karne ke liye use hota hai. 

// let stack = []; 
// stack.push(10); 
// stack.push(20); 
// stack.push(30); 
// console.log(stack);   

// Output: [10, 20, 30] 
// stack.pop();  // Last element remove hoga 
// console.log(stack);   

// Output: [10, 20] 
// ✅ Kaam: Undo/Redo feature, backtracking algorithms, call stack simulation me useful. 


// 4 Live Notifications Add Karna 

// Agar ek website pe live notifications dikhani ho, toh push() ka use karke notification list update kar sakte hain. 

// let notifications = []; 
// function addNotification(msg) { 

//     notifications.push(msg); 

//     console.log("🔔 New Notification:", msg); 

// } 
// addNotification("New User Signed Up!"); 
// addNotification("You have a new message!"); 
// console.log(notifications); 

// Output: ["New User Signed Up!", "You have a new message!"] 

// ✅ Kaam: E-commerce apps, social media platforms aur admin dashboards me real-time updates ke liye. 


// 5  