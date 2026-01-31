// 1. Calculate total cart value from an array of items with price and quantity.
// const cartItems = [
//   { name: "Laptop", price: 50000, quantity: 1 },
//   { name: "Mouse", price: 700, quantity: 2 },
//   { name: "Keyboard", price: 1500, quantity: 1 },
//   { name: "Monitor", price: 12000, quantity: 1 }
// ];
// const totalvalue=cartItems.map((item) =>item.price* item.quantity);
// console.log(totalvalue);
// const add=cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0);
// console.log(add)


// 2. Find the highest priced item in the product list.
// const products = [
//   { name: "Smartphone", price: 25000 },
//   { name: "TV", price: 55000 },
//   { name: "AC", price: 40000 },
//   { name: "Smartwatch", price: 10000 }
// ];
// const add=products.map((product)=>product.price);
// console.log(add)
// const Ma=products.reduce((acc,num)=>(acc<num.price ? num.price :acc),0);
// console.log(Ma)

// 3. Create a frequency map of product categories from an array of products.
// const inventory = [
//   { name: "Shampoo", category: "Beauty" },
//   { name: "Toothpaste", category: "Beauty" },
//   { name: "Sofa", category: "Furniture" },
//   { name: "Dining Table", category: "Furniture" },
//   { name: "Fan", category: "Electronics" }
// ];
// const product=inventory.reduce((acc,i)=>{
//   acc[i.category]=[...(acc[i.category]||[]),i.name];
//   return acc;
// },{});
// console.log(product); 


// 4. Count how many products are currently out of stock.
// const stockList = [
//   { id: 1, name: "Shoes", inStock: true },
//   { id: 2, name: "Jeans", inStock: false },
//   { id: 3, name: "Jacket", inStock: false },
//   { id: 4, name: "Shirt", inStock: true }
// ];





// const workLogs = [
//     { employee: "Alice", department: "Engineering", hours: 40 },
//     { employee: "Bob", department: "Engineering", hours: 38 },
//     { employee: "Charlie", department: "Sales", hours: 45 },
//     { employee: "David", department: "Engineering", hours: 42 },
//     { employee: "Eve", department: "Sales", hours: 50 },
//     { employee: "Frank", department: "HR", hours: 35 },
//     { employee: "Grace", department: "HR", hours: 40 },
//   ];
  
//   const output = {};
  
//   workLogs.forEach(({ department, hours }) => {
//     if (!output[department]) {
//       output[department] = {
//         totalHours: 0,
//         employeeCount: 0,
//         avgHours: 0
//       };
//     }
  
//     output[department].totalHours += hours;
//     output[department].employeeCount += 1;
//   });
  
//   // Calculate average hours
//   for (const dept in output) {
//     output[dept].avgHours = output[dept].totalHours / output[dept].employeeCount;
//   }
  
//   console.log(output);
  


// 4.
// const workLogs = [
//     { employee: "Alice", department: "Engineering", hours: 40 },
//     { employee: "Bob", department: "Engineering", hours: 38 },
//     { employee: "Charlie", department: "Sales", hours: 45 },
//     { employee: "David", department: "Engineering", hours: 42 },
//     { employee: "Eve", department: "Sales", hours: 50 },
//     { employee: "Frank", department: "HR", hours: 35 },
//     { employee: "Grace", department: "HR", hours: 40 },
//   ];


import React, { useState } from "react";

function LightBulb() {
  // useState to track the light status (on or off)
  const [isOn, setIsOn] = useState(false);

  // Toggle function to change the state of the light bulb
  const toggleLight = () => {
    setIsOn((prevStatus) => !prevStatus);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Display the light bulb image or emoji */}
      <div
        style={{
          fontSize: "100px",
          color: isOn ? "yellow" : "gray", // Glowing when ON
          transition: "color 0.3s ease-in-out",
        }}
      >
        {isOn ? "💡" : "💡"}
      </div>

      {/* Display the light status */}
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Light is {isOn ? "ON" : "OFF"}
      </p>

      {/* Button to toggle the light status */}
      <button
        onClick={toggleLight}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Light
      </button>
    </div>
  );
}

export default LightBulb;


     


  