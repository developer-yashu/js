what is map.js

map() creates a new array from calling a function for every array element.
 map() does not execute the function for empty elements.
 map() does not change the original array.

// 1 Add Course Code Prefix
//  ['Math101', 'Eng102'] → ['COURSE: Math101', 'COURSE: Eng102']
 
//  const Course=['Math101', 'Eng102'];
//  const AddCourse=Course.map((cours)=>`Course: ${cours}`);
//  console.log(AddCourse);


// 2 Student Names to Lowercase for Login
//  ['Rahul Sharma', 'Anita Das'] → ['rahul.sharma', 'anita.das'] 

// const StudentNames=['Rahul Sharma','Anita Das'];
// const Lowercas=StudentNames.map((name)=>name.toLowerCase().replace(' ','.'));
// console.log(Lowercas)

// 3 Mark All Lessons as Incomplete
//  ['Lesson 1', 'Lesson 2'] → [{ lesson: 'Lesson 1', completed: false }, { lesson: 'Lesson 2', completed: false }]

// const Lessons=['Lesson 1', 'Lesson 2'];
// const result=Lessons.map((lesson)=>({lesso:lesson,completed:false}));
// console.log(result);

// 4 Attach Certificate Suffix
//  ['Digital Marketing', 'Finance Basics'] → ['Digital Marketing - Certified', 'Finance Basics - Certified']

// const attch=['Digital Marketing', 'Finance Basics'];
// const Certificate=attch.map((add)=>`${add} - Certified`);
// console.log(Certificate);

// 5 Convert Marks to Pass/Fail
//  [65, 45, 30] → ['Pass', 'Pass', 'Fail']

// const Marks=[65, 45, 30];
// const convert=Marks.map((num)=>num>=40 ? 'pass':'Fail');
// console.log(convert);

// 6 Apply GST of 18% to Prices
//  [100, 200, 500] → [118, 236, 590]

// const gst=[100, 200, 500];
// const Prices=gst.map((price)=>price*1.18);
// console.log(Prices);

// 7 Attach SKU Prefix
//  ['A123', 'B456'] → ['SKU-A123', 'SKU-B456']

// const Attach=['A123', 'B456'];
// const sku=Attach.map((sk)=>`SKU-${sk}`);
// console.log(sku);

// 8 Create Cart Summary with Quantity 1
//  ['Mouse', 'Keyboard'] → [{ item: 'Mouse', quantity: 1 }, { item: 'Keyboard', quantity: 1 }]

// const Cart=['Mouse', 'Keyboard'];
// const Create=Cart.map((name)=>({item:`${name}`,quantity: 1 }));
// console.log(Create);

