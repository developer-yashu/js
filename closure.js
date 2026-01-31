function init() {
    let name = "yashu";
    return function display() {
      console.log(name);
    };
  }
  
  let myDisplay = init();
  myDisplay(); // Output: yashu