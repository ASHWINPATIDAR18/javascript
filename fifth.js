//Functions in JS

// function myFunction(){
//     console.log("Welcome to Ayodhya");
//     console.log("Jay Shree Ram");
// }
// myFunction();
// myFunction();


// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I love JS");


// function myFunction(msg,n){
//     console.log(msg*n);
// }
// myFunction("I love JS",100);                  //NaN-> Not a Number


//sum of two numbers
// function sum(x,y){
//     console.log(x+y);
// }


// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);


//sum function
// function sum(a,b){
//     return a+b;
// }

//arrow sum
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }

//multiplication function
// function mul(a,b){
//     return a*b;
// }

// const arrowMul=(a,b)=>{
//     return a*b;
// }

// const printHello=()=>{
//     console.log("hello");
// }


//Practice Q1
/*function countVowels(str){
    let count=0;
    for(const char of str){
        if(char === "a"  ||  char === "e"  ||  char === "i"  ||  char === "o"  ||  char === "u"){
            count++;
        }
    }
    return count;
}*/


//Pratice Q2
/*const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char === "a"  ||  char === "e"  ||  char === "i"  ||  char === "o"  ||  char === "u"){
            count++;
        }
    }
    return count;
}*/


//forEach loop
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// })

// let arr=["pune","delhi","mumbai","ahemdabad"];
// let newArr=arr.forEach((val)=>{
//     console.log(val);
// })
// console.log(newArr);

// let arr=["pune","delhi","mumbai","ahemdabad"];
// let newArr=arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// })
// console.log(newArr);

// let arr=["pune","delhi","mumbai","ahemdabad"];
// let newArr=arr.forEach((val)=>{
//     console.log(val.toUpperCase(),arr);
// })
// console.log(newArr);


//Practice Q
// let nums=[2,3,4,5,6];
// nums.forEach((num)=>{
//     console.log(num*num);
// })

// let nums=[67,52,39];
// nums.map((val)=>{
//     console.log(val);
// })

// let nums=[67,52,39];
// let newArr=nums.map((val)=>{
//     return val;
// })
// console.log(newArr);

// let nums=[67,52,39];
// let newArr=nums.map((val)=>{
//     return val * val;
// })
// console.log(newArr);

// let nums=[67,52,39];
// let newArr=nums.map((val)=>{
//     return val * 2;
// })
// console.log(newArr);


//filter
// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{
//     return val%2 === 0;
// })
// console.log(evenArr);

// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{
//     return val%2 !== 0;
// })
// console.log(evenArr);

// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{
//     return val>3;
// })
// console.log(evenArr);


//Reduce
//sum
// let arr=[1,2,3,4];
// const output=arr.reduce((res,curr) => {
//     return res+curr;
// });
// console.log(output);


//To find lagest number in array 
// let arr=[5,6,2,1,3];

// const output=arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(output);

// const output=arr.reduce((prev,curr)=>{
//     return prev<curr?prev:curr;
// })
// console.log(output);


//Practice Q
/*let marks=[97,94,64,32,49,99,86];
let toppers=marks.filter((val)=>{
    return val>90;
})
console.log(toppers);*/


//Practice Q
let n=prompt("Enter a number:");
let arr=[];
for (let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log("sum= ",sum);

let factorial=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log("factorial= ",factorial);