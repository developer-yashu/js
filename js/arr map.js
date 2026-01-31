// // ✅ 1. Hospital Billing System: Add 18% GST 

// const bills = [1000, 1500, 2000];
// const billsWithGST = bills.map(bill => bill * 1.18);
// console.log(billsWithGST)

// // ✅ 2. HR Management: Capitalize Employee Names 
// const employees = ['raj', 'neha', 'amit'];
// let newemp = employees.map(emp => 
//     (emp).charAt(0).toUpperCase() + emp.slice(1)
// );
// console.log(newemp);

 

// ✅ 3. Doctor Portal: Prefix "Dr." 
// const doctors = ['Singh', 'Verma', 'Chatterjee'];
// let newemp = doctors.map((emp) => `Dr. ${emp}`);
// console.log(newemp);

// // ✅ 4. Lab Reports: Add Units to Test Values 
// const testResults = [85, 120, 140]; 
// const formattedResults = testResults.map(val => `${val} mg/dL`); 
// console.log(formattedResults);

// // ✅ 5. Appointment System: Convert to AM/PM 
// const time = ['09:00', '13:00', '18:30'];
// let hr=time.map((t)=>{
//     h=parseInt(t.slice(0,2));
//     m=t.slice(3);
//     const suffix=h>=12?"pm":"AM";
//     if(h>12){
//         h=h%12;
//     }
//     return `${h}:${m} ${suffix}`;
// });
// console.log(hr);

//  // ✅ 6. Medicine List: Add Expiry Warning Text 

// const medicines = ['Paracetamol', 'Ibuprofen']; 
// const alertList = medicines.map(med => `${med} Expiry within 6 months `);
// console.log(alertList)


// // ✅ 7. Patient Info Formatter: Add Age Label 

// const patients = [25, 60, 45];
// let  patientAges= patients.map(age=>`Age: ${age} yrs`)
// console.log( patientAges)

// // ✅ 8. Surgery Room Mapping: Convert to Room Names 
// const roomNumbers = [101, 102, 103];
// const roomNames = roomNumbers.map(room => `Surgery Room ${room}`);
// console.log(roomNames);


// // ✅ 9. Attendance Report: Mark All as Present Initially 
// const staff = ['Nurse A', 'Nurse B'];
// const attendance = staff.map(member => `${member}  Present`);
// console.log(attendance);

 
// // ✅ 10. Patient ID Cards: Generate QR Code Links 
// const patientIds = [123, 456, 789]; 
// const qrLinks = patientIds.map(id => `https://hospital.com/qr/${id}`);
// console.log(qrLinks)










 // // 1 Add Course Code Prefix
 // const course=['Math101', 'Eng102'];
// const name=course.map(course=>`COURSE: ${course}`);
// console.log(name)


// // 2 Student Names to Lowercase for Login
// const StudentNames=['Rahul Sharma', 'Anita Das'];
// const name=StudentNames.map(emp=>
// (emp).charAt(0).toLowerCase()+emp.slice(1)
// );
// console.log(name)


// // 3 Mark All Lessons as Incomplete
 // const Lessons=['Lesson 1', 'Lesson 2'];
// const Incomplete=Lessons.map(id=>`lesson: ${Lessons} Completed: false `)
// console.log(Incomplete)

// // 4 Attach Certificate Suffix
//  const Certificate=['Digital Marketing', 'Finance Basics'] ;
// const Marketing=Certificate.map(id=>`${id}-Certified`)
// console.log(Marketing)

// // 6 Apply GST of 18% to Prices
 // const GST=[100, 200, 500];
// const  GSTADD=GST.map(bill=>bill*1.18)
//  console.log(GSTADD)
 
// //  7 Attach SKU Prefix
//  const Attach=['A123', 'B456'];
// const add=Attach.map(id=>`SKU-${id}`)
// console.log(add)
  
// // 8 Create Cart Summary with Quantity 1
// const Cart=['Mouse', 'Keyboard'];
// const add=Cart.map(id=>`{item:${id},quantity:1}`)
// console.log(add)

// // 9 Add Availability Status
// const Availability=['Item1', 'Item2'];
// const add =Availability.map(id=>`name:'${id}',available: true` )
// console.log(add)

// // 10 Price to Text Format
 // const price=[499, 899];
// const add =price.map(id=>`price: ₹${id}`)
// console.log(add)

// // 11 Append Batch Year
 // const BatchYear=['Amit', 'Neha'];
// const add=BatchYear.map(id=>`${id}-2020`)
// console.log(add)


// 12 Generate Student Email
// const students = ['Raj Verma', 'Kavita Rai'];
// const emails = students.map(name =>name.toLowerCase().replace(' ', '.')+ '@univ.com');
// console.log(emails);

// 13 Convert Subject Names to Uppercase
//  ['history', 'geography'] → ['HISTORY', 'GEOGRAPHY']
// const Subject=['history', 'geography'];
// const Subjectname= Subject.map(id=>(id).toUpperCase())
// console.log(Subjectname)

// // 14 Student Roll Numbers Formatting
// //  [101, 102] → ['Roll#101', 'Roll#102']
// const Roll_Numbers=[101, 102];
// const add=Roll_Numbers.map(id=>`Roll#${id}`)
// console.log(add)

// // 15 Assign All Students to Same Section
// //  ['S1', 'S2'] → [{ id: 'S1', section: 'A' }, { id: 'S2', section: 'A' }]
// const All_Students=['S1', 'S2'];
// const add=All_Students.map(id=>`id:${id} Section: 'A' `)
// console.log(add)

// 16 Add Status to Leads
//  ['Lead1', 'Lead2'] → [{ name: 'Lead1', status: 'new' }, { name: 'Lead2', status: 'new' }]
 
 
 
 
 
 

