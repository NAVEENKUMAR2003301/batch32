

// // // // javascript

// // // // variable : - 

// // // // storable element, we can store the data 

// // // // TYPES :- 

// // // // var , let , const


// // // // RULES : - 

// // // // var - global scope 

// // // // var a = 10     // declration  , intialiazation

// // // //     a = 15     // reuse       , reIntialiazation
    
// // // // var a = 20     // reDeclration

// // // // console.log(a)


// // // // // let - block scope 

// // // // let b = 30 

// // // //     b = 40

// // // // // let b = 50 not accept reDeclration

// // // // console.log(b);

// // // // // const - constant - block scope

// // // // const c = 20

// // // //     //   c = 20 not accept reUse,Reintialiazation

// // // // // const c = 40 not accept reDeclration

// // // // console.log(c);


// // // // Examples : - 

// // // // Q1
// // // var a = 10;
// // // a = 20;
// // // console.log("Q1:", a); // 20 

// // // // Q2
// // // let b = 30;
// // // b = 40;
// // // console.log("Q2:", b); // 40

// // // // Q3
// // // const c = 50;
// // // console.log("Q3:", c); // 50

// // // // Q4
// // // var x = 5;
// // // var x = 15;
// // // console.log("Q4:", x); // 15

// // // // Q5
// // // let y = 25;
// // // y = y + 5;
// // // console.log("Q5:", y); // 30

// // // // Q6
// // // const z = 100;
// // // // z = 200;
// // // console.log("Q6:", z); // 100

// // // // Q7
// // // var p = 2;
// // // p = p * 3;
// // // console.log("Q7:", p); // 6

// // // // Q8
// // // let q = 8;
// // // q = q - 3;
// // // console.log("Q8:", q);  // 5

// // // // Q9
// // // const r = 7;
// // // console.log("Q9:", r + 2); // 9

// // // // Q10
// // // var m = 1;
// // // let n = 2;
// // // const o = 3;

// // // m = 5;
// // // n = 6;

// // // console.log("Q10:", m, n, o); // 5 , 6 , 3



// // // // printing statement 


// // // // 1. console.log()


// // // console.log(100);

// // // let s = 10

// // // console.log(s);




// // // // 2. alert()

// // // // alert("hello everyone")


// // // // 3. confirm()

// // // // confirm("did you know javascript?")


// // // // 4. prompt()

// // // // prompt("what is your name :- ")


// // // // 5. document.writeln()

// // // // document.writeln(4)


// // // // statement 


// // // // // 1. i want to print value :- "batch32"

// // // // console.log("batch32");


// // // // // 2. i want to show good evening msg to user

// // // // alert("Good Evening Everyone")

// // // // // 3. i want to know user is understand variable concept

// // // // let userWish = confirm("do you understand variable concept")
// // // // console.log(userWish);

// // // // // 4. i want to know user age by console side

// // // // let userAge = prompt("what is your age ?")

// // // // console.log(userAge);


// // // // 5. print ui side batch 32.

// // // // document.writeln("batch 32")



// // // let userAge = prompt("age")

// // // console.log(typeof(Number(userAge)));


// // // console methods : -

// // // 1. console.log()

// // console.log(100);


// // // 2. console.warn()

// // console.warn(100);


// // // 3. console.error()

// // console.error(100)

// // // 4. console.clear()

// // console.clear()


// // // DataTypes :-

// // // 1. primitive dataType

// // // 1. string - ""

// // let a = "naveen"

// // console.log(typeof(a));

// // // 2. number

// // let b = 1

// // console.log(typeof(b));

// // // 3. boolean

// // let c = true 

// // console.log(typeof(c));

// // // 4.undefined 

// // let d;

// // console.log(d);

// // // 5. null

// // // let e = prompt()

// // // console.log(e);






// // // 2. non primitive dataType

// // // 1. Array 

// // // syntex = []


// // let fruit = ["apple","banana","orange","badam","giwi","cherry","pineApple","gueva"]

// // console.log(fruit);
// // console.log(fruit[2]);
// // console.log(fruit[5]);


// // console.log(fruit[fruit.length-1]);
// // console.log(fruit[0]);


// // // 2. object 

// // // syntex = {}

// // let fruitDetials = {
// //     redFruit    : ["apple","cherry"],
// //     yellowFruit : ["banana","pineApple"],
// //     RemainFruit : ["orange","giwi","gueva"],
// //     seed        : "badam"
   
// // }

// // console.log(fruitDetials);

// // console.log(fruitDetials.seed);
// // console.log(fruitDetials.redFruit[0]);
// // console.log(fruitDetials.RemainFruit[2]);
// // console.log(fruitDetials.RemainFruit[fruitDetials.RemainFruit.length-1]);

// // console.clear();


// // // operators 

// // // 1. Arithmetic operator

// // // meaning      operator 


// // // addition        +

// // console.log(1 + 2);

// // // subraction      - 

// // console.log(2-1);

// // // multiplication  *

// // console.log(3*2);

// // // Division        /

// // console.log(10/2);

// // // Modulus         %

// // console.log(10 % 2);

// // // Exponencial     **

// // console.log(3**3); // 3^3 = 3*3*3 = 27

// // console.clear();


// // // Increament - (++) = +1


// // // Post Increament  = var ++

// // // Pre Inceament    = ++ var

// // // Decreament - (--) = -1


// // // Post Decreament  = var --

// // // Pre Deceament    = -- var





// // // Example 


// // let a1 = 2

// // a1--

// // console.log(a1);

// // // you finding element first available in variable side means. you can calculate only till the variable in value side.

// // let b1 = 3            // null

// //     b1 = b1++         // 4

// //     console.log(b1);


// // // you finding element first available in value side means. you can calculate entaire value in value side.


// // let c1 = 2      // 

// // let c2 = c1++   // 

// // console.log("c1",c1);  // c1 : 3
// // console.log("c2",c2);  // c2 : 2


// // // example


// // let d1 = 3    // null

// // let d2 = --d1 // --d1 // 2 

// // let d3 = ++d2 // ++d2 // ++2 = 3 


// // console.log("d1",d1);  // d1 :  2
// // console.log("d2",d2);  // d2 :  3
// // console.log("d3",d3);  // d3 :  3


// // // example 

// // let e1 = 2

// // let e2 = e1-- // e1 // 2

// // let e3 = --e2 // --e2 // -1+2 = 1

// // console.log("e3",e3); // 1



    







// // // 2. Assignment operator

// // let num = 2 

// // let additionVal = 100

// //     // num = num + additionVal

// //     num *= additionVal



// //     console.log(num);
    
// // console.clear();


// // // 3. relational or comparision operator

// // // meaning    operators       examples      result

// // // lessThen       <              5<3          false

// // // greaterThen    >              5 > 3        true

// // // lessThenEq     <=             5 <= 3       false

// // // greaterThenEq  >=             5 >= 5       true 

// // // loosyTypeEq    ==             5 == "5"     true

// // // loosyNotEq     !=             5 != "4"     true

// // // strictlyTypeEq ===            5 === "5"    false

// // // strictlyNotEq  !==             5 !== 5     false



// // console.log(5>=5);        // true
// // console.log(5 === 5.5);   // false
// // console.log(5 == 5.5);    // false
// // console.log(5 != 5.5);    // true
// // console.log(5 !== 5.5);   // true
// // console.log(5 !== "5.5"); // true



// // // 4. logical operator

// // // AND - &&

// // // true && true && true = true 

// // // true && false && false = false 


// // // // OR - ||

// // // true || false || false = true 

// // // false || false || false = false


// // // // NOT - !

// // // !(true) = false 

// // // !(false) = true


// // console.log(5>=5 && 5===.5 && 8==8); // false

// // // true && false && true = false 

// // console.log(5>=5 || 5===.5 || 8==8); // true 

// // // true || false || true 

// // console.log(!(5>=5) || 5===.5 && 8==8); // false

// // // !true = false || false = false && true = false





// // // 5. ternary operator

// // // condition ?  statement : statement ; 

// // // example :-

// // 5!==5 ? console.log("trueeeeeeee") : console.log("falseeeeeeee");


// // console.clear()


// // // Concatination - (+)


// let a = "iron"
// let b = "man"

// console.log(a+" "+b);


// // Template String 

// let c = "spider"
// let d = "man"


// console.log(`${c} ${d}`);
// console.clear();


// // Type Casting 

// // Implicit

// // string 

// // string anything is string

// console.log(typeof("5" + "5"));
// console.log(typeof("5" + 5));
// console.log(typeof("5" + true));
// console.log(typeof("5" + undefined));
// console.log(typeof("5" + null));


// console.log(typeof("5" + [1,2,3]));
// console.log(typeof("5" + {k:8}));


// // Number 

// console.log(typeof(5 + "5"));
// console.log(typeof(5+5));
// console.log(typeof(5+true));
// console.log(typeof(5+undefined));
// console.log(typeof(5 +  null));

// console.log(typeof([1,2,3] + 5));
// console.log(typeof({u:"7"} + 5));



// // boolean

// console.log(typeof(true + "5"));
// console.log(typeof(true + 5));
// console.log(typeof(true + true));
// console.log(typeof(true + undefined));
// console.log(typeof(true + null));


// console.log(typeof(true + [1,2,3,4]))
// console.log(typeof (true + {k:3}));






// // Explicit


// console.log(typeof(5+Number("10")))


// console.log(Number());
// console.log(Number(""));
// console.log(Number("abc"));
// console.log(Number(8778));
// console.log(Number(true));
// console.log(Number(undefined));
// console.log(Number(null));

// console.log(Number([1233,567]));
// console.log(Number({k:5}));


// // boolean Constractor


// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("abc"));
// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// console.log(Boolean([]));
// console.log(Boolean({k:7}));



// console.clear();


// // Flow Control Statement


// // conditional Statement

// // 1. if Condition statement

// // if(condition){statement}

// // if condition = true ; allow inside statement, false not allow

// if(5>=50){
//     console.log("helloworld");
    
    
// }

// console.log("hi");

// // 2. if else statement

// // if(condition){statement}else{statement}

// // if condition = true ; allow inside statement , condition = false ; allow else inside


// if(0){
//     console.log("batch32 task complete");
    
// }else{
//     console.log("not complete task");
    
// }


// // 3. else if statement


// // session finder

// // let hour = prompt("Enter the current time")

// // if(hour>=1 && hour<=12){
// //     alert("good morning");
    
// // }else if(hour >= 13 && hour <= 15){
// //     alert("Good Afternoon");
    
// // }else if(hour >= 16 && hour<= 19){
// //     alert("Good Evening");
    
// // }else if(hour >= 20 && hour <= 24){
// //     alert("Good Night");
    
// // }else{
// //     alert("check correct time ,  give");
    
// // }

// // 4.nested If Statement

// // police selection application 


// // let age    =   prompt("enter your age")
// // let height = prompt("enter your height (cm)")
// // let weight = prompt("enter your weight (kg)")


// // if(age >= 18){
// //     if (height >= 170) {
// //       if (weight >= 60) {
// //         alert("Congradulation you get pass");
// //       } else {
// //     alertg("your weight is not eligible");
// //       }
// //     } else {
// //       alert("your height is not eligible");
// //     }
// // }else{
// //     alert("your age is not eligible");
    
// // }



// // 5. switch statement 

// // let trafficLight = "green"

// // switch (trafficLight) {
// //     case "red": console.log("stop vechile");
    
        
// //         break;
// //     case "yellow": console.log("start vechile");
    
        
// //         break;
// //     case "green": console.log("start vechile");
    
        
// //         break;

// //     default: console.log("have a nice day");
    
// //         break;
// // }



// // switch(condition){

// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;

// // }


// let trafficLight = ""

// switch(trafficLight){
//     case "red" : console.log("stop!!!!!"); break
//     case "yellow" : console.log("start!!!"); break
//     default : console.log("have a nice day");
    
    
    
// }

// console.clear();















// // Looping statement


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// // Types :- 

// // 1. for loop 

// // syntex : - 

// // for(intialiazation ; condition ; iteration ){
// //     statement
// // }


// // example : - 


// for(let a = 1 ; a <= 3 ; a++ ){
//     console.log(a); // 1 // 2 // 3
    
// }

// // flow : - 

// // let a = 1 ; 1 <= 3 = true ; a++ = 2
// // let a = 2 ; 2 <= 3 = true ; a++ = 3
// // let a = 3 ; 3 <= 3 = true ; a++ = 4
// // let a = 4 ; 4 <= 3 = false.


// // add  / even 

// for(let i = 1 ; i <= 10 ; i++){
    
//     if(i%2==0){
//         console.log("even :- ",i);
        
//     }
    
// }

// // 2. while loop 

// // syntex :- 


// // intialiazation 

// // while(condition){

// //     statement 

// //     iteration 
// // }

// // example 


// let value = 30

// while (value >= 50) {

//     console.log(value); // 10

//     value--

    
// }


// // flow 


// // val = 3  , 3 >= 0 = true {  c(3) , 3--  } // 2
// // val = 2  , 2 >= 0 = true { c(2) , 2-- } // 1
// // val = 1  , 1 >= 0 = true { c(1) , 1-- } // 0
// // val = 0  , 0 >= 0 = true { c(0) , 0-- } // -1
// // val = -1 , -1 >= 0 = false . 


// // 3. do while loop 


// // syntex :- 

// // intialiazation 

// // do{
// //      statement 

// //      iteration 
// // }

// // while(condition )


// let b1 = 30 

// do {
//       console.log(b1);

//       b1--
      
// }

// while(b1>=50)






// // 4. for of loop - string , array , function 

// // syntex : - 

// // for(declration type variable){
// //     statement
// // }


// let str = "javascript"
// let arr = ["apple","banana","orange","pineApple"]

// for(let c of arr){
//     console.log(c);
    
// }



// // 5. for in loop - object

// let obj = {
//     name1 : "john",
//     role  : "developer",
//     salary: 1000000
// }

// for(let a in obj){
//     console.log(a , obj[a]);
    
// }

// console.clear();







// //  function 

// // block of code for specific task  /

// // reuse code and value  /

// // Avoid repeatation    /

// // organize the code   /

// // clean , readable code /

// // save time /

// // reduce code line , reliability /

// // easy debug /

// // dynamic value, use to parameter /


// // syntex : - 

// // function functionName(parameter){
// //     statement 
// //     return 
// //     yeild
// // }

// // functionName(argument)


// // example : -


// function one(){

//     console.log("hello world");
    
// }

// // one()


// function flowControl(){

//     console.log("conditional");

//     if(true){
//         console.log("hi by if statement");
        
//     }

//     console.log("looping");

//     for(let a = 0 ; a <= 5 ; a++){
//         console.log(a);
        
//     }   
// }

// // flowControl()



// // parameter , argument 


// function b2(a){
//     console.log("name : - ",a);
    
// }

// // b2("john")
// // b2("paul")
// // b2("paul1")
// // b2("paul2")
// // b2("paul3")


// function form(name, department , course){

//     console.log("name :- ",name);
//     console.log("department :- ",department);
//     console.log("course :- ", course);

// }


// // form("navi","ece","python")
// // form("kamal","cse","java")
// // form("praveen","ai","javascript")




// // return

// function firstEmployee(salary){
//     return salary
// }


// let employee1 = firstEmployee(100000)


// function secondEmployee(salary){
//     return salary
// }


// let employee2 = secondEmployee(200000)





// function office(){
//     console.log(employee1);
//     console.log(employee2);
    
// }

// office()




// var string1 = "hello"

// console.log("value :-" , string1);



// let emp2 = {
//     name1 : "kamal",
//     salary: 400000
// }

// console.log(emp2.salary);


// function getObj(bonus){
//     console.log(emp2.name1);
//     console.log(emp2.salary+bonus);
    
// }

// getObj(5000)

// console.clear();





// console.clear();


// // Scope 


// function scopeCheck(){
//     if(true){

//         var z1 = "var variable Function & global scope"
//         let z2 = "let variable block scope"
//         const z3 = "Const variable block scope"

//         console.log(z2);
//         console.log(z3);
//     }
    
//     console.log(z1);
    
    
    
// }

// scopeCheck()


// // hoisting 

// console.log(y1);

// var y1 = "hello"


// let y2 = "hi"
// console.log(y2);

// const y3 = "welcome"
// console.log(y3);

// console.clear();

// // function types 

// // 1. named function 

// named("named function")
// function named(parameter){
//     console.log(parameter);
    
// }


// // 2. annonymous function 

// var annonymous = function(parameter){
//     console.log(parameter);
    
// }

// annonymous("Annonymous function")

// // 3. Arrow function

// var Arrow = (parameter)=>{
//     console.log(parameter);
    
// }
// Arrow("Arrow function")



// // IIFE - self invoke function

// (function(shirt,phant){
//     alert(`offers going on shirt ${shirt} discount, phant ${phant} discount. `)
// })(50, 40)


// higher order function and callback function 


function fun1(){
    console.log("higher order function ");
    
}

function fun2(){
    console.log("calback function ");
    
}

fun1(fun2())


// example 


function add(calback,a,b){ // callback = sub , a = 20 , b = 40
    console.log(a+b); // 20 + 40 ==> 60
    calback(20,20); // sub(20,20)
    
}


function sub(num1,num2){
    console.log(num1-num2);
    
}



add(sub,20,40)





// Generator function

function* batch32(){

    yield "first month"
    yield "20% cashback"
    yield "1999rst flat offer"
    yield "100% cashback"
    yield "try again better luck next time"


}

let genVal = batch32()

// console.log(genVal.next().value);
// console.log(genVal.next().value);
// console.log(genVal.next().value);
// console.log(genVal.next().value);
// console.log(genVal.next().value);


for (let d1 of genVal){
    console.log(d1);
    
}


// default parameter


let form = function(name,department,disability="no"){
    console.log("name",name);
    console.log("department",department);
    console.log("disability",disability);
    
}


form("praveen","ECE","yes")
form("prasath","ECE")



// currying stracture . UnCurrrying Stracture


// uncurrying

function a2(f1){
    return function (f2){
        return function (f3) {

            console.log(f1 + f2 + f3);
            
            
        }
    }
}


a2(1000)(100)(1500)


console.clear();


// Data Stracture


// ES6 edition - ECMA SCRIPT - 2015


// Spread operator 

// If you have two Array or object do you want to merge the value and take clone we use spread operator.

// Array spread operator

// [...]


// example 


let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let totalArray = [...arr1,...arr2,9,10]

console.log(totalArray);


// object operator 

// {...}

// example :- 

let obj1 = {
    user : "abc",
    detials : "developer",
    salary  : 1000
}

let obj2 = {
    user1 : "dce",
    detials11 : "Backend developer",
    salary1  : 7000
}


let totalObj = {...obj1,...obj2,date : 6}

console.log(totalObj);





// Rest operator

// we can multiple argument store single parameter inside.

// function 

// (...)


// example 


function random(a,b,...c){
    console.log(a+b+c[0]+c[1]);
    console.log(c);
    
    
}

random(1,2,3,4,5,6,7,8,9)


console.clear();


// destracture


// normal method 

// Array 

let fruit = ["apple","orange","banana","giwi"]

let fruit1 = fruit[0]
let fruit2 = fruit[1]
let fruit3 = fruit[2]
let fruit4 = fruit[3]

console.log(fruit1,fruit2,fruit3,fruit4);


// destracture of array


let [x1,x2,x3,x4] = fruit

console.log(x1,x2,x3,x4);



// nested value of array


let nested = [1,2,3,[4,5,[6,7,[8]]]]


let nest1 = nested[0]
let nest2 = nested[1]
let nest3 = nested[2]
let nest4 = nested[3][0]
let nest5 = nested[3][1]
let nest6 = nested[3][2][0]
let nest7 = nested[3][2][1]
let nest8 = nested[3][2][2][0]

console.log(nest1,nest2,nest3,nest4,nest5,nest6,nest7,nest8);

// destracture nested value


let [t1,t2,t3,[t4,t5,[t6,t7,[t8]]]] = nested


console.log(t1,t2,t3,t4,t5,t6,t7,t8);


// object 


let emp1 = {
    name1 : "ravi",
    role  : "sap mm",
    salary : "6lpa"
}


let raviName = emp1.name1
let raviRole = emp1.role
let raviSalary = emp1.salary 

console.log(raviName,raviRole,raviSalary);


// destracture 

let {name1,role,salary} = emp1

console.log(name1,role,salary);


// example :- 


function store(...a){

    let [e1,e2,e3,e4,e5,e6,e7,e8] = a

    console.log(e1 + e8);
    
    

}

store(1,2,3,4,5,6,7,8)

console.clear();


// Array Advance Concept


let array = [1,2,3,4,"hello",true,undefined,null,[1,2],{k:2}]

console.log(array);
console.log(array[0]);
console.log(array[array.length-1]);


// homogenous

// hetrogenous

// flexible



//  //   if you are using add method, you can add multiple value.

//  //   if you are using remove method , you can remove single value.

// array manipulation method

// types :- 

let arr = [1,2,3]

// 1. push() - you can add array of last value

arr.push(4,5,6,7)

// 2. pop()  - you can remove of array last value

arr.pop()

// 3. shift() - you can remove array of first value

arr.shift()

// 4. unshift() - you can add array of first value.

arr.unshift(0,1)

console.log(arr);



// 5. splice() - (startingIndex , deleteCount , adding value )


let arr10 = [1,2,3,40,50,6,7]

arr10.splice(3,2,4,5)


console.log(arr10);



// Array merge method 


// concat, 

let a11 = [1,2,3,4]
let a12 = [5,6,7,8]

let totalArr = a11.concat(a12,9,10)

console.log(totalArr);



// slice, 

let a13 = [1,2,3,4,5,678,91011,12,13,14]

let sliceVal = a13.slice(5,7) // SI,EI + 1

console.log(sliceVal);



// flat, 

let a14 = [1,2,[3,4,[5]]]

let flatVal = a14.flat(Infinity)

console.log(flatVal);


// fill, 

let a15 = [1,2,3,4] //, 1,2,3 ,"four"

a15.fill("four",3,4) // value , si , ei +1

console.log(a15);


// includes, 

let a16 = [6,7,5,9,10]

let includesVal = a16.includes(9)

console.log(includesVal);



// indexOf, 

let a17 = [1,2,3,3,2,1]

let indexOfVal = a17.indexOf(2,2)

console.log(indexOfVal);



// lastIndexOf, 

a17 = [1, 2, 3, 3, 2, 1];

let lastIndexOfVal = a17.lastIndexOf(2,3)

console.log(lastIndexOfVal);



// reverse

let a18 = [1,2,3,4,5,6]

let reverseVal = a18.reverse()

console.log(reverseVal);



// sort, 

let a19 = [9,4000,2,111,6,0,3] // 4000 = 4.000 , 111 = 1.11  
// // 4.000 < 6

let sortVal = a19.sort()

console.log(sortVal);

console.clear();


//  Array higher order method

let games = ["cricket","football","kabbadi","tennis","volleyball"]

// 1. forEach()

let forEachNew = games.forEach((currentElement , index , totalArray)=>{

    return currentElement
    
     

})

console.log(forEachNew);




// 2. map()

let newMap = games.map((c,i,t)=>{

    return c
    
})

console.log(newMap);


// 3. filter()

let employeeDetials = [
    {empName : "a" , salary : 100000},
    {empName : "b" , salary : 200000},
    {empName : "c" , salary : 300000},
    {empName : "d" , salary : 400000},
    {empName : "e", salary : 500000},
    {empName : "f" , salary : 600000}
]

let salaryDate = employeeDetials.filter((c,i,t)=>{
    return c.salary > 200000
})

console.log(salaryDate);


// 4. find()

let salaryEmp = employeeDetials.find((c,i,t)=>{

    return c.salary > 200000

})

console.log(salaryEmp);



employeeDetials = [
  { empName: "a", salary: 100000 },
  { empName: "b", salary: 200000 },
  { empName: "c", salary: 300000 },
  { empName: "d", salary: 400000 },
  { empName: "e", salary: 500000 },
  { empName: "f", salary: 600000 },
];

// 5. reduce()

let allSalary = employeeDetials.reduce((acc,c,i,t)=>{

    return acc + c.salary

    //      0  + 1
    //      1  + 2
    //      3  + 3
    //      6  + 4
    //      10 + 5
    //      15 + 6

    // return 21

},0) // 1 // 3 // 6 // 10  // 15 // 21

console.log(allSalary);


// 6. some() -- or

let ar = [1,2,3,4]

let someVal = ar.some((c,i,t)=>{

    return c%2==0

    // 1%2==0  false
    // 2%2==0  true
    // 3%2==0  false
    // 4%2==0  true

    // false || true || false || true = true 

})

console.log(someVal);


// 7. every() -- and

let ar1 = [2,4,6,8]

let everyVal = ar1.every((c,i,t)=>{

    return c%2==0

})

console.log(everyVal);


// 8. sort()


let ar2 = [2,30,4000,502,1,78] 

let sortVal1 = ar2.sort((a,b)=>{

    return b-a

})

console.log(sortVal1);


// convert method 


// Array to String 


let array1 = [1,2,3,4]

console.log(array1.join(10));

// toString

let array2 = [1,2,3,4,5]

console.log(array2.toString());
















// // // date










