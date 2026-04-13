Block Scope (with let/const): Accessible inside {} blocks

{
    let name = "Yashu";
    console.log(name); // Works: Yashu
  }
  console.log(name); //  Error: name is not defined
  


  {
    var age = 22;
    console.log(age); // 22
  }
  console.log(age); //  Still 22 (because `var` is function-scoped, not block-scoped)
  
