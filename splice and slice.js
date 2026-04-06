splice() returns an array of removed elements:
add, remove, or replace elements in an array


//  💼 1. HR Management System
// Original Array:
// let employees = ["Amit", "Sneha", "Ravi", "John", "Neha"];
// Scenario: Move "John" to the top of the list so he appears first in the employee dashboard.

// let employees = ["Amit", "Sneha", "Ravi", "John", "Neha"];
// if(employees.includes("John"))
// {
//     let index = employees.indexOf("John") 
//     employees.splice(index,1)
//     employees.unshift("John")
// }
// console.log(employees)


// 📚 2. Online Learning Platform
// Original Array:
// let courses = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

// Scenario: A student mistakenly enrolled in "Python" twice. Remove the second instance.

// let courses = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
// if(courses.includes("Python"))
// {
//     let  index=courses.indexOf("Python")
//     courses.splice(index,1)
// }
// console.log(courses)


// 🛍️ 3. E-commerce Website
// Original Array:
// let cart = ["T-shirt", "Shoes", "Jeans", "Cap"];

// Scenario: Insert a "Wallet" item right after "Shoes".

// let cart = ["T-shirt", "Shoes", "Jeans", "Cap"];
// if(cart.includes("Shoes"))
// {
//     let index=cart.indexOf("Shoes")
//     cart.splice(index+1,0,"Wallet")
// }
// console.log(cart)

// 🏥 4. Hospital Management App
// Original Array:
// let patients = ["Rina", "Ayaan", "Soham", "Deep", "Nisha"];

// Scenario: Remove "Soham" as he was mistakenly added twice in the system.

// let patients = ["Rina", "Ayaan", "Soham", "Deep", "Nisha"];
// if(patients.includes("Soham"))
// {
//     let index=patients.indexOf("Soham")
//     patients.splice(index,1)
// }
// console.log(patients)

// 🎓 5. School Admin Portal
// Original Array:
// let subjects = ["Math", "Science", "English", "History", "Geography"];

// Scenario: A student resubmitted "Science Project" — insert "Science Project (Revised)" just after "Science".

// let subjects =["Math", "Science", "English", "History", "Geography"];
// if(subjects.includes("Science"))
// {
//     let index=subjects.indexOf("Science")
//     subjects.splice(index,1,"Revised Science")
// }
// console.log(subjects )

// 🎬 6. Movie Streaming App
// Original Array:
// let watchlist = ["Inception", "Interstellar", "Tenet", "Dunkirk"];

// Scenario: Move "Tenet" to the start of the watchlist.

//  let watchlist = ["Inception", "Interstellar", "Tenet", "Dunkirk"];
// if(watchlist.includes("Tenet"))
// {
//     let index=watchlist.indexOf("Tenet")
//     watchlist.splice(index,1)
//     watchlist.unshift("Tent")
// }
// console.log(watchlist)

// 📦 7. Warehouse Inventory System
// Original Array:
// let items = [ "Box D","Box A", "Box B", "Box C", "Box E"];
// Scenario: Due to a packing error, "Box C" and "Box D" must be removed.

// let items = [ "Box D","Box A", "Box B", "Box C", "Box E"];


//  📈 8. Finance Dashboard
// Original Array:
// let transactions = ["Salary", "Groceries", "Electricity", "Dining", "Internet"];

// Scenario: Create a snapshot of the middle 3 expenses ("Groceries" to "Dining") for analysis.

// let transactions = ["Salary", "Groceries", "Electricity", "Dining", "Internet"];
// const index = transactions.indexOf("Electricity");      
// const snapshot = transactions.slice(index,5) 
// console.log(snapshot);


//  🏡 9. Property Listing Website
// Original Array:
// let properties = ["Villa", "Apartment", "Studio", "Penthouse", "Farmhouse"];

// Scenario: Display only the last 3 property types as a "Luxury Picks" carousel.

//  let properties = ["Villa", "Apartment", "Studio", "Penthouse", "Farmhouse"];
// if(properties.includes("Farmhouse"))
// {
//     let index = properties.indexOf("Farmhouse"); 
//      properties.splice(index+1,0,"Luxury Picks"); 
// }
//  console.log(properties);


//  🚑 10. Emergency Alert App
// Original Array:
// let alerts = ["Fire", "Earthquake", "Flood", "Tornado", "Storm"];

// Scenario: Temporarily display only the first 3 alerts on a widget.
// let alerts = ["Fire", "Earthquake", "Flood", "Tornado", "Storm"];
//  const snapshot =alerts.slice(0,3) 
// console.log(snapshot);

 
// 🧳 11. Travel Planner App
// Original Array:
// let itinerary = ["Flight", "Hotel", "Car Rental", "City Tour", "Dinner"];

// Scenario: The user cancelled "City Tour" — remove it from the plan.

// let itinerary = ["Flight", "Hotel", "Car Rental", "City Tour", "Dinner"];
//  if(itinerary.includes("City Tour"))
// {
//     let index = itinerary.indexOf("City Tour"); 
//     itinerary.splice(index,1);  
// }
//   console.log(itinerary) 

// 🧠 12. Mental Health Tracker
// Original Array:
// let moods = ["Happy", "Anxious", "Calm", "Stressed", "Content"];

// Scenario: Move "Calm" to the end of the list to reflect mood progression.


// let moods = ["Happy", "Anxious", "Calm", "Stressed", "Content"];
//  if(moods.includes("Calm")) 
//  {
//      let index = moods.indexOf("Calm"); 
//       moods.splice(index,1);    
//       moods.unshift("Calm");
//  }
//  console.log(moods); 

// 13 Original Array:
// let tasks = ["Meeting", "Report", "Email", "Presentation", "Review"];

// Scenario: Replace "Email" with "Client Email" for clarity.



// let tasks = ["Meeting", "Report", "Email", "Presentation","Review"];
// if(tasks.includes("Email"))
// {
//     let index = tasks.indexOf("Email");
//     tasks.splice(index,1,"Client Email");
    
// }
// console.log(tasks); 


// 🧒 14. Daycare App
// Original Array:
// let kids = ["Aarav", "Mira", "Kabir", "Nina", "Vivaan"];

// Scenario: Insert "Snack Break" between "Kabir" and "Nina" in the daily schedule.


// let kids = ["Aarav", "Mira", "Kabir", "Nina", "Vivaan"];
//  if(kids.includes("Kabir")) 
// {
//     let index = kids.indexOf("Kabir");
//      kids.splice(index+1,0,"Snack Break");  
     
// }
// console.log(kids); 


// 📊 15. Sales CRM Dashboard
// Original Array:
// let leads = ["Google", "Amazon", "Microsoft", "Netflix", "Tesla"];

// Scenario: Remove "Netflix" and place it at the bottom for de-prioritization.


// let leads = ["Google", "Amazon", "Microsoft", "Netflix", "Tesla"];
//  if(leads.includes("Netflix"))   
//  {
//      let index = leads.indexOf("Netflix"); 
//       leads.splice(index,1); 
//       leads.push("Netflix") 
//  }
//   console.log(leads); 
















