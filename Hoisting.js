What is hoisting in JavaScript ?

 Hoisting is JavaScript’s behavior of moving declarations to the top of the current scope (function or global).

 
console.log(a); // undefined
var a = 5;


let or const 
Ye Temporal Dead Zone (TDZ) me rehte hain (declare hone tak access nahi kar sakte)
Access karoge → ReferenceError
