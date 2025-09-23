//Arithmetic operators

// let a=5;
// let b=2;
// let c=a+b;

// console.log("a =",a,"$ b =",b);
// console.log("a + b = ", c);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// let a=5;
// let b=2;
// console.log("a=",a,"b=",b);
// a++;
// console.log("a=",a);
// a--;
//console.log("a=",a);

// console.log("++a=",++a);
// console.log("--a=",--a);


// let a=5;
// let b=2;
// a+=4;
// a-=4;
// console.log("a=",a);

// console.log("a == b",a == b);
// console.log("a != b",a != b);
// console.log("5 != 2",a != b);


/*let a=5;
let b="5";
console.log("a == b",a == b);
console.log("a === b",a === b);*/


//Logical AND &&
// let a=6;
// let b=5;
//let cond1=a>b;
//let cond2=a === 6;
//console.log("cond1 && cond2=",cond1 && cond2);

// let cond1=a<b;
// let cond2=a === 6;
// console.log("cond1 && cond2=",cond1 && cond2);


//Logical OR ||
/*let a=6;
let b=5;
let cond1=a<b;
let cond2=a === 6;
console.log("cond1  ||  cond2=",a<b  ||  a === 6);*/


//Logical NOT !
/*let a=6;
let b=5;
let cond1=a<b;
let cond2=a === 6;
console.log("!(a<b)=",!(a<b));*/


//Conditional Statement
//if Statement
// let mode="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// }


// let age=16;
// if(age>18){
//     console.log("You Can Vote");
// }
// if(age<18){
//     console.log("You Can Not Vote");
// }

/*let mode="dark";
let color;
if(mode === "dark"){
    color="black";
}
if(mode === "light"){
    color="white";
}
console.log(color);*/


//if-else Statement
/*let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}else{
    color="white";
}
console.log(color);*/

// let age=25;
// if(age>=18){
//     console.log("You can vote");
// }else{
//     console.log("You can not vote");
// }


//Odd or Even
// let num=10;
// if(num%2 === 0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }


//else-if Statement
/*let age=82;
if(age<18){
    console.log("junior");
}else if(age>60){
    console.log("senior");
}else{
    console.log("middle");
}*/


//let mode="dark";
//if(mode==="dark") console.log(mode);    //for single work only
/*if(mode==="dark"){
    console.log(mode);
}*/


//Ternery Operators
// let age=16;
// let result=age>=18?"adult":"not adult";
// console.log(result);

 
// let name=prompt("Hello!");
// console.log(name);


/*let num=prompt("Enter a number:");
if(num%5===0){
    console.log(num,"is aa multiple of 5");
}else{
    console.log(num,"is not a multiple of 5");
}*/


let score=prompt("Enter Your Score(0-100)");
let grade;
if(score>=90 && score<=100){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else if(score>=0 && score<=49){
    grade="F"
}
console.log("According to your scores, your grade was:",grade);