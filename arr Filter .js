what is filter

Condition true wale elements ko naya array me return karta hai. 
//13
//  ✅ 1. Hospital Admin → Admitted Patients Only 
// const patients = [
// { name: 'Ravi', admitted: true }, 
// { name: 'Sita', admitted: false },
// { name: 'rita', admitted: false },
// { name: 'Shyam', admitted: true }, 
// { name: 'Mohan', admitted: false }
// ];
// const admitted=patients.filter((patient)=>patient.admitted);
// console.log(admitted);


// ✅ 2. HRMS → Active Employees 
// const employees = [
// { name: 'Amit', status: 'active' },
// { name: 'shanu', status: 'inactive' },
// { name: 'Ravi', status: 'active' },
// { name: 'Neha', status: 'inactive' },
// { name: 'Neha', status: 'inactive' }];
// const active=employees.filter((employee)=>employee.status==='active');
// console.log(active);


// ✅ 3. Doctor Finder → Only Cardiologists 

// const doctors = [
// { name: 'Dr. Roy',specialty: 'Cardiologist' }, 
// { name: 'Dr. Khan',specialty: 'Dermatologist' },
// { name: 'Dr. Sharma',specialty: 'Cardiologist' },
// { name: 'Dr. Gupta',specialty: 'Pediatrician' },
// { name: 'Dr. Mehta',specialty: 'Cardiologist' }
// ];
// const finder=doctors.filter((doctor)=>doctor.specialty=='Cardiologist');
// console.log(finder);

// ✅ 4. Pharmacy → Non-Expired Medicines 

// const meds = [
// { name: 'Paracetamol', expired: false }, 
// { name: 'Insulin', expired: true },
// { name: 'Aspirin', expired: false },
// { name: 'Ibuprofen', expired: true },
// { name: 'Amoxicillin', expired: false }
// ];
// const pharmacy=meds.filter((Medicine)=>Medicine.expired=== false);
// console.log(pharmacy)

// ✅ 5. Lab Tests → Abnormal Results Only 
// const results = [
// { test: 'Glucose', value: 180 },  
// { test: 'BP', value: 120 },
// { test: 'Cholesterol', value: 250 },
// { test: 'Liver Function', value: 30 },
// { test: 'Kidney Function', value: 1.5 }
// ];
// const LabTests=results.filter((test)=>test.value>150);
// console.log(LabTests);

// ✅ 6. Feedback System → Only Negative Feedback 

// const feedbacks = ['Great service', 'Doctor was rude','Billing issue', 'Nurse was helpful', 'Wait time was too long'];

// const NegativeFeedback=feedbacks.filter((Feedback)=>Feedback.includes('rude')||Feedback.includes('issue')||Feedback.includes('long'));
// console.log(NegativeFeedback)




// ✅ 7. Appointment Portal → Upcoming Appointments 

// const appointments = [
// { time: '2025-04-31' },
// { time: '2025-04-25' },
// { time: '2025-04-28' },
// { time: '2025-03-30' },
// { time: '2025-03-29' }
// ];
// const today = new Date();
// // console.log(today)
// const Upcoming=appointments.filter((a)=>new Date(a.time)>new Date());
// console.log(Upcoming)

 

// ✅ 8. Staff Management → Filter by Department 
// const staff = [
// { name: 'Pooja', dept: 'ICU' }, 
// { name: 'Suresh', dept: 'OPD' },
// { name: 'Ravi', dept: 'ICU' },
// { name: 'Neha', dept: 'Surgery' },
// { name: 'Amit', dept: 'ICU' }
// ];
// const Dpartment=staff.filter((dpartmen)=>dpartmen.dept=='ICU');
// console.log(Dpartment)

// ✅ 9. Nurse Dashboard → Night Shift Nurses 
// const nurses = [
// { name: 'Anu', shift: 'night' },  
// { name: 'Rani', shift: 'day' },
// { name: 'Sita', shift: 'night' },
// { name: 'Ravi', shift: 'day' },
// { name: 'Amit', shift: 'night' }
// ];
// const shif=nurses.filter((nurses)=>nurses.shift=='night');
// console.log(shif)

 

// ✅ 10. Patient Intake → Age > 60 

// const patients = [
// { name: 'Karan', age: 65 }, 
// { name: 'Reema', age: 45 },
// { name: 'Amit', age: 70 },
// { name: 'Sita', age: 55 },
// { name: 'Ravi', age: 80 }
// ];
// const Age=patients.filter((patient)=>patient.age>60);
// console.log(Age)

// ✅ 11. Doctor CRM → Verified Profiles Only 
// const profiles = [
// { name: 'Dr. Bose', verified: true },
// { name: 'Dr. Das', verified: false },
// { name: 'Dr. Roy', verified: true },
// { name: 'Dr. Sharma', verified: false },
// { name: 'Dr. Gupta', verified: true }];
// const profile=profiles.filter((crm)=>crm.verified==true);
// console.log(profile);

// ✅ 12. HR Portal → Filter Out Resigned Staff 
// const staff = [
// { name: 'Dev', resigned: false },
// { name: 'Riya', resigned: true },
// { name: 'Amit', resigned: false },
// { name: 'Sita', resigned: true },
// { name: 'Ravi', resigned: false }
// ];
// const Resigned=staff.filter((out)=>out.resigned==false);
// console.log(Resigned)

// ✅ 13. Medical Records → Only High Risk Patients 
// const records = [
// { name: 'Ali', risk: 'high' },
// { name: 'Ravi', risk: 'low' },
// { name: 'Sita', risk: 'high' },
// { name: 'Amit', risk: 'medium' },
// { name: 'Neha', risk: 'high' }
// ];
// const HighRisk=records.filter((Risk)=>Risk.risk=='high');
// console.log(HighRisk)

//  ✅ 14. Equipment Inventory → Only Available Items 
// const items = [
// { name: 'ECG', available: true },  
// { name: 'MRI', available: false },
// { name: 'X-Ray', available: true },
// { name: 'CT Scan', available: true},];
// const Available=items.filter((item)=>item.available==true);
// console.log(Available)
 
// ✅ 16. Call Logs → Emergency Only 
// const calls = [{ type: 'general' },  
// { type: 'emergency' }];
// const Emergency=calls.filter((call)=>call.type=='emergency');
// console.log(Emergency)

// ✅ 17. Ambulance Tracker → Active Vehicles 
// const vehicles = [{ id: 'A1', active: true }, 
// { id: 'A2', active: false }];
// const Active=vehicles.filter((vehicle)=>vehicle.active==true);
// console.log(Active)

// ✅ 18. Online Orders → Delivered Orders Only 
// const orders = [{ id: 1, status: 'pending' },  
// { id: 2, status: 'delivered' }];
// const Delivered=orders.filter((order)=>order.status=='delivered');
// console.log(Delivered)

// ✅ 19. Lab → Only Tests with Missing Reports 
// const tests = [{ test: 'Thyroid', report: true }, 
// { test: 'Cholesterol', report: false }];
// const Missing=tests.filter((test)=>test.report==false);
// console.log(Missing)

 // ✅ 20. Login Logs → Only Failed Attempts 
// const logs = [{ user: 'admin', success: true },  
// { user: 'guest', success: false }];
// const Failed=logs.filter((log)=>log.success==false);
// console.log(Failed)

// ✅ 21. HR → Candidates with Experience > 5 Yrs 
// const candidates = [{ name: 'Vikram', exp: 6 }, 
// { name: 'Rashi', exp: 3 }];
// const Experienced=candidates.filter((candidate)=>candidate.exp>5);
// console.log(Experienced)

 // ✅ 22. Surgery List → Filter Completed Surgeries 
// const surgeries = [{ id: 1, done: true }, { id: 2, done: false }];
// const Completed=surgeries.filter((surgery)=>surgery.done==true);
// console.log(Completed)

// ✅ 23. Patient Monitor → Critical Vitals 
// const vitals = [{ oxygen: 92 }, { oxygen: 85 }];
// const Critical=vitals.filter((vital)=>vital.oxygen<90);
// console.log(Critical)

// ✅ 24. Device Logs → Filter Offline Devices 
// const devices = [{ id: 'D1', online: true }, { id: 'D2', online: false }];
// const Offline=devices.filter((device)=>!device.online==false);
// console.log(Offline)

// ✅ 25. CRM → Filter Leads by Source = "Google" 
// const leads = [{ name: 'Ashish', source: 'Google' },  
// { name: 'Piya', source: 'Referral' }];
// const crm=leads.filter((lead)=>lead.source=='Google');
// console.log(crm);

// ✅ 26. Attendance → Absentees Only 
// const logs = [
// { name: 'Ravi', present: true },
// { name: 'Neel', present: false }];
// // const Attendance=Absentees.filter((id)=>id.present)
// const absentees = logs.filter(person =>!person.present);
// console.log(absentees);

// ✅ 27. Bed Management → ICU Beds Only 

// const beds = [{ id: 101, type: 'General' }, { id: 202, type: 'ICU' }];





// 1. Filter all patients who are admitted currently.
// const patients = [
//   { id: 1, name: "Rohan", admitted: true },
//   { id: 2, name: "Anjali", admitted: false },
//   { id: 3, name: "Vikram", admitted: true },
//   { id: 4, name: "Sita", admitted: false }
// ];
// const admittedPatients = patients.filter(patient=> patient.admitted==true);
// console.log(admittedPatients);

// 2. Filter doctors who are available today.
// const doctors = [
//   { id: 1, name: "Dr. Meena", availableToday: true },
//   { id: 2, name: "Dr. Ali", availableToday: false },
//   { id: 3, name: "Dr. Tara", availableToday: true },
//   { id: 4, name: "Dr. Ronit", availableToday: false }
// ];
// const available = doctors.filter(doctor=> doctor.availableToday==true);
// console.log(available);

// 3. Filter patients whose age is more than 60.
// const patients = [
//   { id: 1, name: "Dinesh", age: 65 },
//   { id: 2, name: "Sunita", age: 45 },
//   { id: 3, name: "Mahesh", age: 72 },
//   { id: 4, name: "Komal", age: 58 }
// ];
// const elderly = patients.filter(patient=> patient.age>60);
// console.log(elderly);   

// 4. Filter hospital staff who are nurses.
// const staff = [
//   { id: 1, name: "Pooja", role: "Nurse" },
//   { id: 2, name: "Raj", role: "Doctor" },
//   { id: 3, name: "Lata", role: "Nurse" },
//   { id: 4, name: "Amit", role: "Receptionist" }
// ];
// const nurses = staff.filter((person)=>person.role=="Nurse");
// console.log(nurses);

// 5. Filter ICU patients.
// const patients = [
//   { id: 1, name: "Karan", ward: "ICU" },
//   { id: 2, name: "Seema", ward: "General" },
//   { id: 3, name: "Nitin", ward: "ICU" },
//   { id: 4, name: "Suman", ward: "Private" }
// ]
// const icu=patients.filter((patient)=>patient.ward==="ICU");
// console.log(icu);

// 6. Filter doctors who have more than 5 years of experience.
// const doctors = [
//   { id: 1, name: "Dr. Renu", experience: 10 },
//   { id: 2, name: "Dr. Sameer", experience: 3 },
//   { id: 3, name: "Dr. Alok", experience: 8 },
//   { id: 4, name: "Dr. Namrata", experience: 2 }
// ];
// const experienced=doctors.filter((doctor)=>doctor.experience>5);
// console.log(experienced)

// 7. Filter patients with pending bills.
// const patients = [
//   { id: 1, name: "Aarti", pendingBill: true },
//   { id: 2, name: "Rakesh", pendingBill: false },
//   { id: 3, name: "Deepak", pendingBill: true },
//   { id: 4, name: "Kavita", pendingBill: false }
// ];
// const pending=patients.filter((patient)=>patient.pendingBill);
// console.log(pending);

// 8. Filter hospital equipment that needs maintenance.
// const equipment = [
//   { id: 1, name: "ECG Machine", needsMaintenance: true },
//   { id: 2, name: "Ventilator", needsMaintenance: false },
//   { id: 3, name: "Suction Pump", needsMaintenance: true },
//   { id: 4, name: "Ultrasound", needsMaintenance: false }
// ];
// const hospital=equipment.filter((equipments)=>equipments.needsMaintenance==true);
// console.log(hospital);

// 9. Filter ambulance drivers who are on duty.
// const drivers = [
//   { id: 1, name: "Suraj", onDuty: true },
//   { id: 2, name: "Harish", onDuty: false },
//   { id: 3, name: "Neeraj", onDuty: true },
//   { id: 4, name: "Aakash", onDuty: false }
// ];
// const duty=drivers.filter((on)=>on.onDuty==true);
// console.log(duty);

// 10. Filter medicines that are out of stock.
// const medicines = [
//   { id: 1, name: "Paracetamol", inStock: false },
//   { id: 2, name: "Amoxicillin", inStock: true },
//   { id: 3, name: "Ibuprofen", inStock: false },
//   { id: 4, name: "Metformin", inStock: true }
// ];
// const stock=medicines.filter((medicine)=>medicine.inStock==false);
// console.log(stock);

// 11. Filter employees who are currently on leave.
// const employees = [
//   { id: 1, name: "Ravi", onLeave: false },
//   { id: 2, name: "Priya", onLeave: true },
//   { id: 3, name: "Arjun", onLeave: true },
//   { id: 4, name: "Neha", onLeave: false }
// ];
// const leave=employees.filter((on)=>on.onLeave==true);
// console.log(leave);

// 9. Filter ambulance drivers who are on duty.
// const drivers = [
//   { id: 1, name: "Suraj", onDuty: true },
//   { id: 2, name: "Harish", onDuty: false },
//   { id: 3, name: "Neeraj", onDuty: true },
//   { id: 4, name: "Aakash", onDuty: false }
// ];
// const duty=drivers.filter((driver)=>driver.onDuty==true);
// console.log(duty)

// 10. Filter medicines that are out of stock.
// const medicines = [
//   { id: 1, name: "Paracetamol", inStock: false },
//   { id: 2, name: "Amoxicillin", inStock: true },
//   { id: 3, name: "Ibuprofen", inStock: false },
//   { id: 4, name: "Metformin", inStock: true }
// ];
// const stock=medicines.filter((ofstock)=>ofstock.inStock==false);
// console.log(stock)

// 11. Filter employees who are currently on leave.
// const employees = [
//   { id: 1, name: "Ravi", onLeave: false },
//   { id: 2, name: "Priya", onLeave: true },
//   { id: 3, name: "Arjun", onLeave: true },
//   { id: 4, name: "Neha", onLeave: false }
// ];
// const leave=employees.filter((onLeave)=>onLeave.onLeave==true);
// console.log(leave)

// 12. Filter employees with pending performance reviews.
// const employees = [
//   { id: 1, name: "Rahul", reviewPending: true },
//   { id: 2, name: "Sneha", reviewPending: false },
//   { id: 3, name: "Imran", reviewPending: true },
//   { id: 4, name: "Ritu", reviewPending: false }
// ];
// const reviews=employees.filter(employee=>employee.reviewPending== true);
// console.log(reviews);

// 13. Filter employees who joined in the current financial year.
// const employees = [
//   { id: 1, name: "Meera", joiningYear: 2023 },
//   { id: 2, name: "Aakash", joiningYear: 2022 },
//   { id: 3, name: "Suman", joiningYear: 2023 },
//   { id: 4, name: "Nikhil", joiningYear: 2021 }
// ]; 

// 14. Filter employees with designation as "Software Engineer".
// const employees = [
//   { id: 1, name: "Tanvi", designation: "Software Engineer" },
//   { id: 2, name: "Rakesh", designation: "HR Manager" },
//   { id: 3, name: "Leena", designation: "Software Engineer" },
//   { id: 4, name: "Abhishek", designation: "QA Analyst" }
// ];
// const softwareEngineer=employees.filter((employee)=>employee.designation=="Software Engineer");
// console.log(softwareEngineer);

// 15. Filter employees whose salary is above ₹80,000.
// const employees = [
//   { id: 1, name: "Aditya", salary: 75000 },
//   { id: 2, name: "Kiran", salary: 90000 },
//   { id: 3, name: "Divya", salary: 82000 },
//   { id: 4, name: "Manav", salary: 70000 }
// ];
// const highSalary=employees.filter((employee)=>employee.salary>80000);
// console.log(highSalary);

// 16. Filter doctors who specialize in cardiology.
// const doctors = [
//   { id: 1, name: "Dr. Asha", specialty: "Cardiology" },
//   { id: 2, name: "Dr. Vivek", specialty: "Dermatology" },
//   { id: 3, name: "Dr. Neha", specialty: "Cardiology" },
//   { id: 4, name: "Dr. Ravi", specialty: "Neurology" }
// ];
// const specialize=doctors.filter((doctor)=>doctor.specialty=="Cardiology");
// console.log(specialize);

// 17. Filter doctors who have a rating above 4.5.
// const doctors = [
//   { id: 1, name: "Dr. Sara", rating: 4.8 },
//   { id: 2, name: "Dr. Rohit", rating: 4.2 },
//   { id: 3, name: "Dr. Isha", rating: 4.9 },
//   { id: 4, name: "Dr. Vinay", rating: 4.0 }
// ];
// const ratings=doctors.filter((doctor)=>doctor.rating>4.5);
// console.log(ratings);

// 18. Filter doctors who offer online consultation.
// const doctors = [
//   { id: 1, name: "Dr. Tanya", onlineConsultation: true },
//   { id: 2, name: "Dr. Imran", onlineConsultation: false },
//   { id: 3, name: "Dr. Farah", onlineConsultation: true },
//   { id: 4, name: "Dr. Kunal", onlineConsultation: false }
// ];
// const  onoline=doctors.filter((doctor)=>doctor.onlineConsultation==true);
// console.log(onoline);

// 19. Filter doctors with more than 1000 consultations.
// const doctors = [
//   { id: 1, name: "Dr. Arya", consultations: 1200 },
//   { id: 2, name: "Dr. Vikas", consultations: 850 },
//   { id: 3, name: "Dr. Sneha", consultations: 1300 },
//   { id: 4, name: "Dr. Raj", consultations: 700 }
// ];
// const consultation=doctors.filter((doctor)=>doctor.consultations>1000);
// console.log(consultation)

// 20. Filter doctors located in "Kolkata".
// const doctors = [
//   { id: 1, name: "Dr. Mehul", city: "Mumbai" },
//   { id: 2, name: "Dr. Nandita", city: "Kolkata" },
//   { id: 3, name: "Dr. Dev", city: "Kolkata" },
//   { id: 4, name: "Dr. Anu", city: "Delhi" }
// ];
// const located=doctors.filter((doctor)=>doctor.city=="Kolkata");
// console.log(located);

// 21. Filter products priced below ₹500.
// const products = [
//   { id: 1, name: "Pen", price: 50 },
//   { id: 2, name: "Notebook", price: 250 },
//   { id: 3, name: "Power Bank", price: 999 },
//   { id: 4, name: "USB Cable", price: 300 }
// ];
// const below=products.filter((product)=>product.price<500);
// console.log(below);

// 22. Filter items with discount greater than 20%.
// const items = [
//   { id: 1, name: "Shirt", discount: 25 },
//   { id: 2, name: "Jeans", discount: 15 },
//   { id: 3, name: "Shoes", discount: 30 },
//   { id: 4, name: "Cap", discount: 10 }
// ];
// const discount=items.filter((item)=>item.discount>20);
// console.log(discount);

// 23. Filter products that are out of stock.
// const inventory = [
//   { id: 1, name: "Tablet", inStock: true },
//   { id: 2, name: "Laptop", inStock: false },
//   { id: 3, name: "Headphones", inStock: false },
//   { id: 4, name: "Charger", inStock: true }
// ];
// const outOfStock=inventory.filter((item)=>item.inStock==false);
// console.log(outOfStock);

// 24. Filter products that belong to the "Electronics" category.
// const catalog = [
//   { id: 1, name: "TV", category: "Electronics" },
//   { id: 2, name: "Sofa", category: "Furniture" },
//   { id: 3, name: "Washing Machine", category: "Electronics" },
//   { id: 4, name: "Table", category: "Furniture" }
// ];
// const electronics=catalog.filter((item)=>item.category=="Electronics");
// console.log(electronics);

// 25. Filter items that are eligible for free shipping.
// const items = [
//   { id: 1, name: "Books", freeShipping: true },
//   { id: 2, name: "Stationery", freeShipping: false },
//   { id: 3, name: "Smartphone", freeShipping: true },
//   { id: 4, name: "Speaker", freeShipping: false }
// ];
// const Shipping=items.filter((item)=>item.freeShipping==true);
// console.log(Shipping);

// 26. Filter students who have completed their course.
// const students = [
//   { id: 1, name: "Ankit", courseCompleted: true },
//   { id: 2, name: "Divya", courseCompleted: false },
//   { id: 3, name: "Rajesh", courseCompleted: true },
//   { id: 4, name: "Kriti", courseCompleted: false }
// ];
// const completed=students.filter((student)=>student.courseCompleted==true);
// console.log(completed);

// 27. Filter courses with duration more than 6 months.
// const courses = [
//   { id: 1, name: "Full Stack Dev", duration: 12 },
//   { id: 2, name: "Data Entry", duration: 3 },
//   { id: 3, name: "AI & ML", duration: 8 },
//   { id: 4, name: "Tally", duration: 4 }
// ];
// const duration=courses.filter((course)=>course.duration>6);
// console.log(duration);

// 28. Filter instructors who are currently active.
// const instructors = [
//   { id: 1, name: "Ritu", active: true },
//   { id: 2, name: "Adil", active: false },
//   { id: 3, name: "Neha", active: true },
//   { id: 4, name: "Mohit", active: false }
// ];
// const active=instructors.filter((instructor)=>instructor.active==true);
// console.log(active);

// 29. Filter students with attendance below 75%.
// const students = [
//   { id: 1, name: "Shreya", attendance: 80 },
//   { id: 2, name: "Aman", attendance: 60 },
//   { id: 3, name: "Bhavya", attendance: 70 },
//   { id: 4, name: "Punit", attendance: 90 }
// ];
// const attendance=students.filter((student)=>student.attendance<75);
// console.log(attendance);

// 30. Filter students who opted for the "Python" course.
// const students = [
//   { id: 1, name: "Tanmay", course: "JavaScript" },
//   { id: 2, name: "Ragini", course: "Python" },
//   { id: 3, name: "Harsh", course: "Python" },
//   { id: 4, name: "Mehul", course: "Java" }
// ];
// const student=students.filter((student)=>student.course=="Python");
// console.log(student);

// 31. Filter users who have verified their email.
// const users = [
//   { id: 1, name: "Nikhil", emailVerified: true },
//   { id: 2, name: "Sana", emailVerified: false },
//   { id: 3, name: "Alok", emailVerified: true },
//   { id: 4, name: "Gauri", emailVerified: false }
// ];
// const verified=users.filter((user)=>user.emailVerified==true);
// console.log(verified);

// 32. Filter sessions that are marked as completed.
// const sessions = [
//   { id: 1, topic: "React Basics", completed: true },
//   { id: 2, topic: "Redux", completed: false },
//   { id: 3, topic: "Node.js", completed: true },
//   { id: 4, topic: "MongoDB", completed: false }
// ];
// const mark=sessions.filter((session)=>session.completed==true);
// console.log(mark);

// 33. Filter employees with contract type "Freelancer".
// const employees = [
//   { id: 1, name: "Varun", contractType: "Permanent" },
//   { id: 2, name: "Manasi", contractType: "Freelancer" },
//   { id: 3, name: "Rishabh", contractType: "Freelancer" },
//   { id: 4, name: "Neelam", contractType: "Intern" }
// ];
// const contract=employees.filter((employee)=>employee.contractType=="Freelancer");
// console.log(contract);

// 34. Filter students who have pending assignments.
// const students = [
//   { id: 1, name: "Ishita", pendingAssignments: true },
//   { id: 2, name: "Raghav", pendingAssignments: false },
//   { id: 3, name: "Nina", pendingAssignments: true },
//   { id: 4, name: "Sarthak", pendingAssignments: false }
// ];
// const pending=students.filter((student)=>student.pendingAssignments==true);
// console.log(pending);


// 35. Filter lectures that are scheduled on or after "2025-05-01".
// const lectures = [
//   { id: 1, topic: "React Basics", date: "2025-04-28" },
//   { id: 2, topic: "Redux", date: "2025-05-02" },
//   { id: 3, topic: "TypeScript", date: "2025-05-05" },
//   { id: 4, topic: "Node.js", date: "2025-04-30" }
// ];
// const scheduled=lectures.filter((dats)=>new Date(dats.date)>new Date("2025-05-01"));
// console.log(scheduled)

// 36. Filter tasks with dueDate before today (assume today is "2025-04-23").
// const tasks = [
//   { id: 1, title: "Submit Resume", dueDate: "2025-04-20" },
//   { id: 2, title: "Attend Seminar", dueDate: "2025-04-24" },
//   { id: 3, title: "Project Meeting", dueDate: "2025-04-21" },
//   { id: 4, title: "Course Signup", dueDate: "2025-04-23" }
// ];
// const overdueTasks = tasks.filter(task=>new Date(task.dueDate)<new Date("2025-04-23"));
// console.log(overdueTasks);

// 37. Filter students whose registration date is in March 2025.
// const students = [
//   { id: 1, name: "Neha", registeredOn: "2025-03-15" },
//   { id: 2, name: "Amit", registeredOn: "2025-04-01" },
//   { id: 3, name: "Tanvi", registeredOn: "2025-03-28" },
//   { id: 4, name: "Rohan", registeredOn: "2025-02-27" }
// ];
// const marchStudents = students.filter((s)=> s.registeredOn >= "2025-03-01" && s.registeredOn <= "2025-03-31");
// console.log(marchStudents);

// 38. Filter subscriptions that are going to expire within the next 7 days from "2025-04-23". 
// const subscriptions = [ 
// { id: 1, user: "Kiran", expiresOn: "2025-04-24" }, 
// { id: 2, user: "Rajat", expiresOn: "2025-04-30" }, 
// { id: 3, user: "Simran", expiresOn: "2025-05-02" }, 
// { id: 4, user: "Ajay", expiresOn: "2025-04-23" } 
// ]; 
// const startDate = new Date("2025-04-23") 
// const expireWithinSevenDays = subscriptions.filter(s => { 
// const lastDate = new Date(s.expiresOn); 
// const diff = lastDate - startDate; 
// const result = diff/(1000*60*60*24); 
// return result > 0 && result < 7 
// }) 
// console.log(expireWithinSevenDays);

// 39. Filter events that are scheduled on weekends. 
// const events = [ 
// { id: 1, name: "Workshop", date: "2025-04-26" }, // Saturday 
// { id: 2, name: "Hackathon", date: "2025-04-27" }, // Sunday 
// { id: 3, name: "Seminar", date: "2025-04-25" }, // Friday 
// { id: 4, name: "Webinar", date: "2025-04-28" }  // Monday 
// ]; 
// const weekends=events.filter( 
// (e)=>{ 
// let currentdate = new Date().getDay(); 
// let eventdate = new Date(e.date).getDay(); 
// return eventdate===0 || eventdate===6 
// }) 
// console.log(weekends);

// 40.Filter employees who joined the company after 1st Jan 2024. 
// const employees = [ 
// { id: 1, name: "Isha", joinedOn: "2024-12-31" }, 
// { id: 2, name: "Arjun", joinedOn: "2025-01-10" }, 
// { id: 3, name: "Sneha", joinedOn: "2024-11-15" }, 
// { id: 4, name: "sudarshan", joinedOn: "2022-12-31" }, 
// { id: 5, name: "Dev", joinedOn: "2025-02-01" } 
// ]; 
// const firstDate = new Date("2024-01-01"); 
// const joined = employees.filter(e => { 
// const lastDate = new Date(e.joinedOn); 
// const diff = lastDate > firstDate; 
// return diff 
// }) 
// console.log(joined); 

