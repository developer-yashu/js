 Explain closures and how they work.

A closure is created when a function remembers its outer lexical environment, even after that outer function has finished executing.


function init() {
    let name = "yashu";
    return function display() {
      console.log(name);
    };
  }
  
  let myDisplay = init();
  myDisplay(); // Output: yashu
