 Explain Promises and how they work and Promise.all.
     Promise is a javaScript future result. if success goes to
     .then if fail goes to .catch and it is two parameter resolve and reject


//  interve qushan
// process.stdout.write('A');
// setTimeout(() =>process.stdout.write(' B'), 1000);
// setTimeout(() => process.stdout.write(' C'), 1000);
// process.stdout.write(' D');




// let Promise1 =new Promise ((resole,reject)=>{
//     setTimeout(resole,1000,"First");
// });
// let Promise2 =new Promise ((resole,reject)=>{
//     setTimeout(reject,2000,"Second");
// });   
// let Promise3 =new Promise ((resole,reject)=>{        
// setTimeout(resole,3000,"Third");
// })
// Promise.all([Promise1,Promise2,Promise3])
// .then(console.log)
// .catch(console.log);


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});   

let promise3 = new Promise((resolve, reject) => {        
    setTimeout(resolve, 3000, "Third");
});

// Promise.all([promise1, promise2, promise3])
//     .then(console.log)  
//     .catch(console.log);

 const name = "yahsu";
console.log(this.name);
