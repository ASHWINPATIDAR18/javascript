// console.log("hello");
// alert("JavaScript Seekho"); 

// console.log(window);
// window.console.log("hello2");

// console.dir(window.document);            //to print object
//document is model or representation of any code
                                    
// console.dir(document.body);         //to access body
// console.log(document.body);         //for html version

// console.dir(document.head);

// console.dir(document.body.childNodes[1]);

// document.body.childNodes[1].innerText = "abcd";

// let heading = document.getElementById("heading");     //h1
// console.log(heading);
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class");     //all
// console.dir(headings);
// console.log(headings);

// let button = document.getElementById("myId");     
// console.dir(button);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let firstEl = document.querySelector("p");       //1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");       //all elements
// console.dir(allEl);                              //returns NodeList

// let firstEl = document.querySelector(".heading-class");       
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".heading-class");       
// console.dir(allEl);                              

// let firstEl = document.querySelector("#myId");       //access button
// console.dir(firstEl);


// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna Collage students";  //concatenate
