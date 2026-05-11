

// // // javascript

// // // variable : - 

// // // storable element, we can store the data 

// // // TYPES :- 

// // // var , let , const


// // // RULES : - 

// // // var - global scope 

// // // var a = 10     // declration  , intialiazation

// // //     a = 15     // reuse       , reIntialiazation
    
// // // var a = 20     // reDeclration

// // // console.log(a)


// // // // let - block scope 

// // // let b = 30 

// // //     b = 40

// // // // let b = 50 not accept reDeclration

// // // console.log(b);

// // // // const - constant - block scope

// // // const c = 20

// // //     //   c = 20 not accept reUse,Reintialiazation

// // // // const c = 40 not accept reDeclration

// // // console.log(c);


// // // Examples : - 

// // // Q1
// // var a = 10;
// // a = 20;
// // console.log("Q1:", a); // 20 

// // // Q2
// // let b = 30;
// // b = 40;
// // console.log("Q2:", b); // 40

// // // Q3
// // const c = 50;
// // console.log("Q3:", c); // 50

// // // Q4
// // var x = 5;
// // var x = 15;
// // console.log("Q4:", x); // 15

// // // Q5
// // let y = 25;
// // y = y + 5;
// // console.log("Q5:", y); // 30

// // // Q6
// // const z = 100;
// // // z = 200;
// // console.log("Q6:", z); // 100

// // // Q7
// // var p = 2;
// // p = p * 3;
// // console.log("Q7:", p); // 6

// // // Q8
// // let q = 8;
// // q = q - 3;
// // console.log("Q8:", q);  // 5

// // // Q9
// // const r = 7;
// // console.log("Q9:", r + 2); // 9

// // // Q10
// // var m = 1;
// // let n = 2;
// // const o = 3;

// // m = 5;
// // n = 6;

// // console.log("Q10:", m, n, o); // 5 , 6 , 3



// // // printing statement 


// // // 1. console.log()


// // console.log(100);

// // let s = 10

// // console.log(s);




// // // 2. alert()

// // // alert("hello everyone")


// // // 3. confirm()

// // // confirm("did you know javascript?")


// // // 4. prompt()

// // // prompt("what is your name :- ")


// // // 5. document.writeln()

// // // document.writeln(4)


// // // statement 


// // // // 1. i want to print value :- "batch32"

// // // console.log("batch32");


// // // // 2. i want to show good evening msg to user

// // // alert("Good Evening Everyone")

// // // // 3. i want to know user is understand variable concept

// // // let userWish = confirm("do you understand variable concept")
// // // console.log(userWish);

// // // // 4. i want to know user age by console side

// // // let userAge = prompt("what is your age ?")

// // // console.log(userAge);


// // // 5. print ui side batch 32.

// // // document.writeln("batch 32")



// // let userAge = prompt("age")

// // console.log(typeof(Number(userAge)));


// // console methods : -

// // 1. console.log()

// console.log(100);


// // 2. console.warn()

// console.warn(100);


// // 3. console.error()

// console.error(100)

// // 4. console.clear()

// console.clear()


// // DataTypes :-

// // 1. primitive dataType

// // 1. string - ""

// let a = "naveen"

// console.log(typeof(a));

// // 2. number

// let b = 1

// console.log(typeof(b));

// // 3. boolean

// let c = true 

// console.log(typeof(c));

// // 4.undefined 

// let d;

// console.log(d);

// // 5. null

// // let e = prompt()

// // console.log(e);






// // 2. non primitive dataType

// // 1. Array 

// // syntex = []


// let fruit = ["apple","banana","orange","badam","giwi","cherry","pineApple","gueva"]

// console.log(fruit);
// console.log(fruit[2]);
// console.log(fruit[5]);


// console.log(fruit[fruit.length-1]);
// console.log(fruit[0]);


// // 2. object 

// // syntex = {}

// let fruitDetials = {
//     redFruit    : ["apple","cherry"],
//     yellowFruit : ["banana","pineApple"],
//     RemainFruit : ["orange","giwi","gueva"],
//     seed        : "badam"
   
// }

// console.log(fruitDetials);

// console.log(fruitDetials.seed);
// console.log(fruitDetials.redFruit[0]);
// console.log(fruitDetials.RemainFruit[2]);
// console.log(fruitDetials.RemainFruit[fruitDetials.RemainFruit.length-1]);

// console.clear();


// // operators 

// // 1. Arithmetic operator

// // meaning      operator 


// // addition        +

// console.log(1 + 2);

// // subraction      - 

// console.log(2-1);

// // multiplication  *

// console.log(3*2);

// // Division        /

// console.log(10/2);

// // Modulus         %

// console.log(10 % 2);

// // Exponencial     **

// console.log(3**3); // 3^3 = 3*3*3 = 27

// console.clear();


// // Increament - (++) = +1


// // Post Increament  = var ++

// // Pre Inceament    = ++ var

// // Decreament - (--) = -1


// // Post Decreament  = var --

// // Pre Deceament    = -- var





// // Example 


// let a1 = 2

// a1--

// console.log(a1);

// // you finding element first available in variable side means. you can calculate only till the variable in value side.

// let b1 = 3            // null

//     b1 = b1++         // 4

//     console.log(b1);


// // you finding element first available in value side means. you can calculate entaire value in value side.


// let c1 = 2      // 

// let c2 = c1++   // 

// console.log("c1",c1);  // c1 : 3
// console.log("c2",c2);  // c2 : 2


// // example


// let d1 = 3    // null

// let d2 = --d1 // --d1 // 2 

// let d3 = ++d2 // ++d2 // ++2 = 3 


// console.log("d1",d1);  // d1 :  2
// console.log("d2",d2);  // d2 :  3
// console.log("d3",d3);  // d3 :  3


// // example 

// let e1 = 2

// let e2 = e1-- // e1 // 2

// let e3 = --e2 // --e2 // -1+2 = 1

// console.log("e3",e3); // 1



    







// // 2. Assignment operator

// let num = 2 

// let additionVal = 100

//     // num = num + additionVal

//     num *= additionVal



//     console.log(num);
    
// console.clear();


// // 3. relational or comparision operator

// // meaning    operators       examples      result

// // lessThen       <              5<3          false

// // greaterThen    >              5 > 3        true

// // lessThenEq     <=             5 <= 3       false

// // greaterThenEq  >=             5 >= 5       true 

// // loosyTypeEq    ==             5 == "5"     true

// // loosyNotEq     !=             5 != "4"     true

// // strictlyTypeEq ===            5 === "5"    false

// // strictlyNotEq  !==             5 !== 5     false



// console.log(5>=5);        // true
// console.log(5 === 5.5);   // false
// console.log(5 == 5.5);    // false
// console.log(5 != 5.5);    // true
// console.log(5 !== 5.5);   // true
// console.log(5 !== "5.5"); // true



// // 4. logical operator

// // AND - &&

// // true && true && true = true 

// // true && false && false = false 


// // // OR - ||

// // true || false || false = true 

// // false || false || false = false


// // // NOT - !

// // !(true) = false 

// // !(false) = true


// console.log(5>=5 && 5===.5 && 8==8); // false

// // true && false && true = false 

// console.log(5>=5 || 5===.5 || 8==8); // true 

// // true || false || true 

// console.log(!(5>=5) || 5===.5 && 8==8); // false

// // !true = false || false = false && true = false





// // 5. ternary operator

// // condition ?  statement : statement ; 

// // example :-

// 5!==5 ? console.log("trueeeeeeee") : console.log("falseeeeeeee");


// console.clear()


// // Concatination - (+)


let a = "iron"
let b = "man"

console.log(a+" "+b);


// Template String 

let c = "spider"
let d = "man"


console.log(`${c} ${d}`);
console.clear();


// Type Casting 

// Implicit

// string 

// string anything is string

console.log(typeof("5" + "5"));
console.log(typeof("5" + 5));
console.log(typeof("5" + true));
console.log(typeof("5" + undefined));
console.log(typeof("5" + null));


console.log(typeof("5" + [1,2,3]));
console.log(typeof("5" + {k:8}));


// Number 

console.log(typeof(5 + "5"));
console.log(typeof(5+5));
console.log(typeof(5+true));
console.log(typeof(5+undefined));
console.log(typeof(5 +  null));

console.log(typeof([1,2,3] + 5));
console.log(typeof({u:"7"} + 5));



// boolean

console.log(typeof(true + "5"));
console.log(typeof(true + 5));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(true + null));


console.log(typeof(true + [1,2,3,4]))
console.log(typeof (true + {k:3}));






// Explicit


console.log(typeof(5+Number("10")))


console.log(Number());
console.log(Number(""));
console.log(Number("abc"));
console.log(Number(8778));
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(null));

console.log(Number([1233,567]));
console.log(Number({k:5}));


// boolean Constractor


console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean([]));
console.log(Boolean({k:7}));



console.clear();


// Flow Control Statement


// conditional Statement

// 1. if Condition statement

// if(condition){statement}

// if condition = true ; allow inside statement, false not allow

if(5>=50){
    console.log("helloworld");
    
    
}

console.log("hi");

// 2. if else statement

// if(condition){statement}else{statement}

// if condition = true ; allow inside statement , condition = false ; allow else inside


if(0){
    console.log("batch32 task complete");
    
}else{
    console.log("not complete task");
    
}


// 3. else if statement


// session finder

// let hour = prompt("Enter the current time")

// if(hour>=1 && hour<=12){
//     alert("good morning");
    
// }else if(hour >= 13 && hour <= 15){
//     alert("Good Afternoon");
    
// }else if(hour >= 16 && hour<= 19){
//     alert("Good Evening");
    
// }else if(hour >= 20 && hour <= 24){
//     alert("Good Night");
    
// }else{
//     alert("check correct time ,  give");
    
// }

// 4.nested If Statement

// police selection application 


// let age    =   prompt("enter your age")
// let height = prompt("enter your height (cm)")
// let weight = prompt("enter your weight (kg)")


// if(age >= 18){
//     if (height >= 170) {
//       if (weight >= 60) {
//         alert("Congradulation you get pass");
//       } else {
//     alertg("your weight is not eligible");
//       }
//     } else {
//       alert("your height is not eligible");
//     }
// }else{
//     alert("your age is not eligible");
    
// }



// 5. switch statement 

let trafficLight = "green"

switch (trafficLight) {
    case "red": console.log("stop vechile");
    
        
        break;
    case "yellow": console.log("start vechile");
    
        
        break;
    case "green": console.log("start vechile");
    
        
        break;

    default: console.log("have a nice day");
    
        break;
}














// Looping statement



















// // function 

// // date










