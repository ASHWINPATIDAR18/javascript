//for loop
// for(let i=1;i<=5;i++){
//     console.log("RadheRadhe");
// }

// for(let count=1;count<=5;count++){
//     console.log("RadheRadhe");
// }
// console.log("Loop has ended");


//calculate sum of 1 to 5
/*let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum=",sum);
console.log("Loop has ended");*/


//while loop
/*let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}*/


//do-while loop
// let i=20;
// do{
//     console.log("RadheRadhe");
//     i++;
// }while(i<=10);

/*let i=1;
do{
    console.log("i=",i);
    i++;
}while(i<=5);*/


//for-of loop
// let str="RadheRadhe";
// for(let i of str){
//     console.log("i=",i);
// }

/*let str="JavaScript";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("String size=",size);*/


//for-in loop
/*let student={
    name:"Ashwin Patidar",
    age:25,
    cgpa:7.5,
    isPass:true
}
for(let key in student){
    console.log("key =",key,"value =",student[key]);
}*/


//Practice Q1
/*for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log("num =",num);
    }
}*/

// for(let num=0;num<=100;num++){
//     if(num%2!==0){
//         console.log("num =",num);
//     }
// }


//Practice Q2
/*let gameNum=25;
let userNum=prompt("Guess the game number:");
while(userNum != gameNum){
    userNum=prompt("You entered wrong number. Guess again:");
}
console.log("Congratulations, you entered the right number");*/


//Strings in JS

// let str="RadheRadhe";
// console.log(str[2])

//Template Literals
// let specialString=`This is a template literal`;
// console.log(specialString);

/*let obj={
    item:"pen",
    price:10,
};
console.log("The cost of",obj.item,"is",obj.price,"rupees");*/

//String Interpolation
/*let obj={
    item:"pen",
    price:10,
};
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);*/


// let specialString=`This is a template literal ${1+2+3}`;
// console.log(specialString);


//Escape characters
// console.log("Radhe\nRadhe");
// console.log("Radhe\tRadhe");


// let str="Radhe\nRadhe";
// console.log(str.length);              //\n has single str length


//String Methods in JS

// let str="RadheRadhe";
// let newStr=str.toUpperCase();
// console.log(newStr);

// let str="RadheRadhe";
// let newStr=str.toLowerCase();
// console.log(newStr);

// let str="      Bolo Radhe Radhe       ";
// console.log(str.trim());

// let str="01234567";
// console.log(str.slice(1,6));

// let str1="Radhe";
// let str2="Mohan";
// let result=str1.concat(str2);
// console.log(result);

// let result=str1+str2;
// console.log(result);

// let str1="Radhe";
// let str2="Krishna";

// let res="Bolo "+str1+str2;
// console.log(res);

// let str="hello";
// console.log(str.replace("lo","p"));

// let str="hellololo";
// console.log(str.replace("lo","p"));

// let str="hellololo";
// console.log(str.replaceAll("lo","p"));

// let str="RadheShyam";
// console.log(str.charAt(4));

// let str="IloveJavaScript";
// str=str.replace("I","A");
// console.log(str);

//Practice Q

let fullName=prompt("Enter your fullname without spaces");
let username="@"+fullName+fullName.length;
console.log(username);