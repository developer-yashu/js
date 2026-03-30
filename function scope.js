Function Scope: Variables declared inside a function are accessible only within that function and not outside it.

function greet() {
    let name = "Yashu";
    console.log(name); // Works: Yashu
  }
  
  greet(); // Calling the function
  
  console.log(name); //  Error: name is not defined outside the function
  
