

// javascript

// variable : - 

// storable element, we can store the data 

// TYPES :- 

// var , let , const


// RULES : - 

// var - global scope 

// var a = 10     // declration  , intialiazation

//     a = 15     // reuse       , reIntialiazation
    
// var a = 20     // reDeclration

// console.log(a)


// // let - block scope 

// let b = 30 

//     b = 40

// // let b = 50 not accept reDeclration

// console.log(b);

// // const - constant - block scope

// const c = 20

//     //   c = 20 not accept reUse,Reintialiazation

// // const c = 40 not accept reDeclration

// console.log(c);


// Examples : - 

// Q1
var a = 10;
a = 20;
console.log("Q1:", a); // 20 

// Q2
let b = 30;
b = 40;
console.log("Q2:", b); // 40

// Q3
const c = 50;
console.log("Q3:", c); // 50

// Q4
var x = 5;
var x = 15;
console.log("Q4:", x); // 15

// Q5
let y = 25;
y = y + 5;
console.log("Q5:", y); // 30

// Q6
const z = 100;
// z = 200;
console.log("Q6:", z); // 100

// Q7
var p = 2;
p = p * 3;
console.log("Q7:", p); // 6

// Q8
let q = 8;
q = q - 3;
console.log("Q8:", q);  // 5

// Q9
const r = 7;
console.log("Q9:", r + 2); // 9

// Q10
var m = 1;
let n = 2;
const o = 3;

m = 5;
n = 6;

console.log("Q10:", m, n, o); // 5 , 6 , 3



// printing statement 


// 1. console.log()


console.log(100);

let s = 10

console.log(s);




// 2. alert()

// alert("hello everyone")


// 3. confirm()

// confirm("did you know javascript?")


// 4. prompt()

// prompt("what is your name :- ")


// 5. document.writeln()

// document.writeln(4)


// statement 


// // 1. i want to print value :- "batch32"

// console.log("batch32");


// // 2. i want to show good evening msg to user

// alert("Good Evening Everyone")

// // 3. i want to know user is understand variable concept

// let userWish = confirm("do you understand variable concept")
// console.log(userWish);

// // 4. i want to know user age by console side

// let userAge = prompt("what is your age ?")

// console.log(userAge);


// 5. print ui side batch 32.

// document.writeln("batch 32")



let userAge = prompt("age")

console.log(typeof(Number(userAge)));

