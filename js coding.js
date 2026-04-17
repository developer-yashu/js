// 1. Reverse a String

// const str = "Hello word";
// let revers=" ";
// for(let i=0;i<str.length;i++){
//     revers=str[i]+revers
// }console.log(revers);


//2. Find the Largest Number

// let num = [1,3,2];
// let Largest=[];
// for(let i=0;i<num.length;i++){
//     if(Largest<num[i]){
//         Largest=num[i];
//     }
// }console.log(Largest);

//3. Count Vowels
// let str = "hello";
// let Count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         Count++
//     }
// }console.log(Count);


// 4. Sum of Array

// let arr = [1,2,3];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }console.log(sum);


//5 Remove Duplicates
// let num = [1,2,2,3];
// let unique = [];

// for(let i=0;i<num.length;i++){
//     let Duplicates=false;
//    for(let j=0;j<unique.length;j++){
//     if(num[i]==unique[j]){
//         Duplicates=true
//     }
    
//    }if(!Duplicates){
//     unique.push(num[i])
//    }
// }console.log(unique);


//6 Longest Word
// let words = ("The quick brown fox");
// let word = words.split(" ");
// let longest = '';
// console.log(word);
// for(let i=0;i<word.length;i++){
//     if(word[i].length>longest.length){
//         longest=word[i]
//     }
// }console.log(longest);



//7. Count Characters
// let str = "hello word hello";
// let obj = {};

// for(let i=0;i<str.length;i++){
//     let data=str[i];
//     if(obj[data]){
//         obj[data]+=1
//     }
//     else{
//         obj[data]=1
//     }
// }console.log(obj);


/*9. Find Duplicates
Description: Identify duplicates in an array.
Example: findDuplicates([1,2,2,3,4,4]) → [2,4].*/

// let arr = [1,2,2,3,4,4];
// let duplicate = [];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             duplicate.push(arr[i])
//         }
//     }
    
// }console.log(duplicate);



// 10. Reverse Words

// let str = "Hello world";
// let revers=" ";
// for(let i=0;i<str.length;i++){
//     revers=str[i]+revers
// }console.log(revers);


/*11. Merge Two Objects
Example: mergeObjects({a:1},{a:2,b:3}) → {a:2,b:3}.*/


// let obj1 = {a:1};
// let obj2 = {a:2,b:3};
// let Merge={...obj1,...obj2}
// console.log(Merge);

/*12. Sum 1 to n
Example: sum(5) → 15.*/
// let sum=0;
// for(let i=1;i<=5;i++){
// sum=sum+i;
// }
// console.log(sum);



/*13. Count Even Numbers up to n
Example: countEven(10) → 5.*/


/*13. Count Even Numbers up to n
Example: countEven(10) → 5.*/

// let count = 0;
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         count++
//     }
// }console.log(count);



/*14. Multiply Array by 2
Example: [1,2,3] → [2,4,6].*/

// let arr=[1,2,3];
// let data=[];
// for(let i=0;i<arr.length;i++){
//     data.push(arr[i]*2)
// }
// console.log(data);


/*16. Palindrome Check
Example: isPalindrome("madam") → true.*/
// let arr='madam'
// let revers="";
// for(let i=0;i<arr.length;i++){
//     revers=arr[i]+revers
// }
//     if(revers==arr){
//         console.log(true);
        
//     }else{
//         console.log(false);
// }
// console.log(revers);



/*17. Factorial (Recursion)
Example: factorial(5) → 120.*/
// let fact=1;
// for(let i=1;i<=5;i++){
//     fact=fact*i
// }console.log(fact);


/*18. Fibonacci Sequence
Example: fibonacci(5) → [0,1,1,2,3].*/
// let a=0;
// let b=1;
// for(let i=0;i<=5;i++){
//     console.log(a);
//     let c=a+b;
//     a=b;
//     b=c;
// }
    

/*19. Array Intersection
Example: intersection([1,2,3],[2,3,4]) → [2,3].*/

// let arr1 = [1, 2, 3];
// let arr2=[2,3,4];
// let result=[];
// for(let i=0;i<arr1.length;i++){
//     if(arr2.includes(arr1[i])){
//         result.push(arr1[i])
//     }
// }
//     console.log(result);
    


/*20. Array Difference
Example: difference([1,2,3],[2,3,4]) → [1].*/

// let arr1 = [1,2,3];
// let arr2 = [2,3,4];

// let result=[];
// for(let i=0;i<arr1.length;i++){
//     if(!arr2.includes(arr1[i])){
//         result.push(arr1[i])
//     }
// }console.log(result);


/*20. Array Difference
Example: difference([1,2,3],[2,3,4]) → [1].*/

// let arr1 = [1,[2,[3,4]],5];
// let data=arr1.flat()
// console.log(data);
// let result=data.flat();
// console.log(result);



/*22. Find Missing Number
Example: [1,2,4,5] → 3.*/

// let num = [1,2,4,5];
// for(let i=1;i<num.length;i++){
//     if(!num.includes(i)){
//         console.log(i);    
//     }
// }


/*Second 23 Largest Number
Example: [1,5,3,9,7] → 7.*/

// let arr=[1,5,3,9,7]
// let Largest=0;
// let Second=0;
// for(let i=0;i<arr.length;i++){
//     if(Largest <arr[i]){
//         Second=Largest
//         Largest=arr[i];
//     }
//     Second=arr[i]
// }console.log(Largest);
// console.log(Second);



 /*24. Reverse Integer
Example: reverseInt(1234) → 4321.*/

// let reverseInt=1234
// let arr=reverseInt.toString();
// let revers="";
// for(let i=0;i<arr.length;i++){
//     revers=arr[i]+revers
// }
// console.log(revers);



/*27. Count Words in String
Example: "The quick brown fox" → 4.*/

// let str = "The quick brown fox";
// let arr=str.split(" ");
// let count=0;
// for(let i=0;i<arr.length;i++){
//     count++
// }console.log(count);


/*30. Frequency of Array Elements
Example: [1,2,2,3,3,3] → {1:1,2:2,3:3}.*/

// let arr = [1,2,2,3,3,3];
// let freq = {};

// for(let i=0;i<arr.length;i++){
//     let data=arr[i]
//     if(freq[data]){
//         freq[data]+=1;
//     }
//     else{
//         freq[data]=1
//     }
// }
// console.log(freq);







