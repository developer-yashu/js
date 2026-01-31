// => Functions
// 1. simple-Function => use with function keyword
// 2. Anonomous function => No use function keyword
// 3. Arrow function => it a modern funtion , used with arrow
// 4. IIFE => when we create it automatical execute (immediately invoked function expresstion)
// 5. recerrive function => step by step solve the problem
// 6. constructor function => that function use new keyword

//  1.Simple function

// function today(a,b,c){
//  let sum = a+b+c
//  console.log(sum)
// }
// today(5,6,4)

// 2.Anonomous function

// let x = function(a,b){
//  let c = a + b
//  console.log(c)
// }
// x(5,5)

// 3.IIFE

// (function(a,b){
//  let x = a+b;
//  console.log(x)
// })(5,6)

// 4.Arrow Function

// let a =(a,b)=>{
//  let sum = a+b
//  console.log(sum)
// }
// a(5,6)

// 5.Recerrive functionṇ

function today(n){
 if(n === 100){
 console.log("Done")
 return
 }
 console.log(n)
 today(n+3)
}
today(10)



// =======================================================================

// 1. Example of Simple Function

// // 1
// function sum(a,b){
//  let sum = a + b;
//  console.log(sum);
// }
// sum(5,15)

// // 2
// function multi(a,b){
//  let product = a * b
//  return product
// }
// console.log(multi(10,5))

// // 3
// let count = 0
// function increment(a){
//  count++
//  return count
// }
// console.log(increment())

// // 4
// function divided (a,b=2){
//  return a / b
// }
// console.log(divided(10))

// // 5 
// function print(){
//  console.log("hello World")
// }
// print()
// ==============================================
// 2. Examples of Anonomous Function

// 1
// let a = function(a,b){
//  return a + b;
// }
// console.log(a(5,10))

// 2
// let a = function(a,b){
//  let sum = a + b
//  console.log(sum)
// }
// a(10,10)

// 3 
// let count = 0;
// let a = function(){
//  return ++count
// }
// console.log(a())

// 4

// let multi = function(a,b){
//  return a * b
// }
// console.log(multi(5,2))

// 5
// let product = function(a,b){
//  return a / b
// }
// console.log(product(10,2))
// =======================================================
// 3.Arrow Function

// 1

// let a = (a,b) =>{
//  return a + b
// }
// console.log(a(10,20))

// 2

// let a =(a,b)=>{
//  return a*b
// }
// console.log(a(10,5))

// 3 

// let divided = (a,b) => {
//  return a / b
// }
// console.log(divided(10,2))

// 4 
// let max =(a,b)=>{
//  return (a>b)?true:false
// }
// console.log(max(10,5))

// 5
// let min =(a,b)=>{
//  return (a<b)?"a is min":"b is min"
// }
// console.log(min(10,5))
// =========================================================
// 4. Example of IIFE

// 1
// let a = (function (a,b){
//  return a+b
// }) (5,3)
// console.log(a)

// 2 
// (function (a,b){
//  console.log(a*b)
// })(10,5)

// 3

// let a =(function (a,b){
//  return a / b
// })(10,2)
// console.log(a)

// 4
// (function (a,b){
//  console.log(a%b)
// })(10,2)
// =====================================================
// Example of recerrive function

// 1
// function count (a){
//  if(a === 100){
//  console.log("done")
//  return
//  }
//  console.log(a)
//  count(a+3)
// }
// count(10)

// 2 
// function alpha(a){
//  if(a === 30){
//  console.log("Done")
//  return 
//  }
//  if(a % 2 == 0){
//  console.log(`even ${a}`)
//  }
//  else{
//  console.log(`odd ${a}`)
//  }
//  alpha(a+1)
// }
// alpha(20)
// ==============================================
// Scope 
//  1. Globel scope = > globel scope can access in anyware (inside function or outside the function)
//  2. fuction / local scope => it can access in only function
//  3. block scope = > It can access only in block({}) or conditional statement or loops
//  4. lexical scope => we can say that in outer function there is a variable so we can acces in inner funtion also this concept is known as lexical concept.

// ====================================================
// Globle scope
// let age = 20
// function intro(){
// console.log(`my age is ${age}`)
// }
// intro()
// console.log(age)

// function scope
// function add(a,b){
// let sum = a+ b
// console.log(sum)
// }
// add(10,20)
// console.log(sum)

// Block scope

// function max(a,b){
// if(a>b){
// let name = "monhan"
// console.log(name)
// }
// console.log(name)
// }
// max(10,5)

// lexical scope

// function outer(){
// let name = "rahul"
// function inner(){
// console.log(`my name is ${name}`)
// }
// inner()
// }
// outer()


// const a = 5
// function age(){
// console.log(a)
// if(a<10){
// console.log(a)
// }
// }
// age()
// console.log(a)

// let a = 5**3
// console.log(a)

// let num = '22abc'
// console.log(+num)
// console.log(typeof(num))
// let num2 = parseInt(num)
// console.log(typeof(num2))

// let a = 5;
// a += 5
// console.log(a)
// a *= 10
// console.log(a)
// a /= 5
// console.log(a)
// a %= 5
// console.log(a)

// let num = '22abc'
// let b = parseInt(num)
// console.log(typeof(b))
// console.log(typeof(+num))
// let b = +num
// console.log(b)
// ----------------------------------------------------------------
// Ternary operator => used to check condition (similar to if-else)

// example let a = 20
//  let b = 10
//  let c = a>b? "a is max":"b is max"
//  console.log(c)


// Logical operator => AND , OR , NOT
// AND => all condition shoud be true orwise it gives false

// let a = 20;
// let b = 10;
// let c = (a > b) && (b < a) ? "a is max":"b is max"
// console.log(c)

// OR => if one condition is true it gives true

// let a = 20
// let b = 10
// let c = (a > b) || (b > a) ? "a is max":"b is max"
// console.log(c)

// NOT => change true to false || false to true

// let a = 20
// let b = 10
// let c = !(a === 20)
// console.log(c)

// Unary Operator = > 1.++ 

// let a = 20
// console.log(a++)

// let c = 10
// console.log(++c)

// 2. --

// let b = 10
// console.log(b--)

// let d = 30
// console.log(--d)

// + => to convert string to number

// let num = "123"
// let num2 = +num
// console.log(typeof(num2))

// - => convert negative to positive

// let A = -1632
// let B = -A
// console.log(B)

// typeof => to check the data type of variable // ParseInt

// let name = "rahul"
// console.log(typeof(name))

// delete => to delete object in object

// -----------------------------------------------------------------------------------
// DataType = > hold a kind of value
//  . Primitive => number , bigInt , undifine , null , String , symbol => represent the memory address, Bool
//  . Non-Primitive => Array , object and function

// conditional statement:-
// if else
// if else if else
// ternary
// switch