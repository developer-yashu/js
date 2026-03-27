What is sort() in JavaScript
sort() is an array method used to sort elements (ascending or descending).



// // 1. HR – Sort employees by salary (high to low) 
// const employees = [ 
//   { name: "Amit", salary: 40000 }, 
//   { name: "Neha", salary: 60000 } 
// ];
// const sortemployees=employees.sort((a, b) => b.salary - a.salary);
// console.log(sortemployees);
 
// // 2. Doctor Portal – Sort doctors by experience (descending) 

// const doctors = [ 
//   { name: "Dr. Sen", experience: 10 }, 
//   { name: "Dr. Roy", experience: 6 } 
// ];
// const doctor=doctors.sort((a,b)=>b.experience - a.experience);
// console.log(doctor);

// 3. Appointment System – Sort by time (ascending) 

const slots = ["14:30", "09:00", "12:15"]; 
slots.sort((a, b) => a.localeCompare(b));
console.log(slots);


    
