//Create array
// let heroes=["ironman","hulk","thor","batman"];
// let marks=[96,75,48,83,66];
// let info=["rahul",86,"Delhi"];

// let marks=[97,82,64,76,36];


//for loop
// for (let idx=0;idx<Array.length;idx++){

// }

// let heroes=["ironman","thor","hulk","spiderman","batman"];
// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }

// for(let idx=1;idx<heroes.length;idx++){
//     console.log(heroes[idx-1]);
// }


//for-of loop
// let heroes=["ironman","thor","hulk","spiderman","batman"];
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities=["delhi","pune","mumbai","hyderabad","gurgaon"];
// for(let city of cities){
//     // console.log(city);
//     console.log(city.toUpperCase());
// }


/*let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum += val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class= ${avg}`);*/


// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`value at index ${i}=${val}`);
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer= ${items[i]}`);
//     i++;
// }

//or
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){

//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer= ${items[i]}`);
//     i++;
// }

// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);


//Array methods

// let foodItems=["potato","apple","litchi","tomato"];
// foodItems.push("chips","burger","paneer");
// console.log(foodItems);


/*let foodItems=["potato","apple","litchi","tomato"];
console.log(foodItems);
let deletedItems=foodItems.pop();
console.log(foodItems);
console.log("deleted",deletedItems);*/


// let foodItems=["potato","apple","litchi","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());

// let marks=[97,86,72,34];

// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHeroes=["superman","batman"];

// let heroes=marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// let marvelHeroes=["thor","spiderman","ironman"];
// let dcHeroes=["superman","batman"];
// let indianHeroes=["krish","flyingjutt"];

// let heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);


// let marvelHeroes=["thor","spiderman","ironman"];
// let heroes=marvelHeroes.unshift("antman");
// console.log(heroes);


// let marvelHeroes=["thor","spiderman","ironman"];
// let val=marvelHeroes.shift();
// console.log("deleted",val);

// let marvelHeroes=["thor","spiderman","ironman","antman","Dr. Strange"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));


// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);               //replace element

// arr.splice(2,0,101);                   //add element

// arr.splice(3,1);                         //delete element

// arr.splice(3,1,101);                      //replace element


//Practice Q
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();                       //removes form start
companies.splice(2,1,"Ola");              //replace element
companies.push("Amazon");                 //add element at end