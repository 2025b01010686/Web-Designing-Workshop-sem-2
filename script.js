// console.log("Hello");
// // alert("Saanvi Saxena");

// console.dir(document.body);
// console.dir(document.head);
//let heading = document.getElementById("heading");
//console.dir(heading);
// let head = document.getElementsByClassName("head");
// console.dir(head);
// console.log(head);
// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);
// let elements = document.querySelector("p"); //returns only first element
// console.dir(elements);
// let allElements = document.querySelectorAll("p");
// console.dir(allElements);
// let yo = document.querySelectorAll(".head");
// console.dir(yo);
// let hi = document.querySelector("#heading");
// console.dir(hi);

//let heading = document.getElementById("heading");
//console.dir(heading.firstElementChild);
//console.log(heading.firstChild.nodeName); #text

// let div = document.querySelector("div");
// console.dir(div);

// 

//Ques- 
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from Apna College students";

//Ques2-
let divs = document.querySelectorAll(".box");

let idx=1;
for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
// console.log(divs);
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
// divs[0].innerText = "new unique value 1";
// divs[2].innerText = "new unique value 3";

// for( div of divs) {
//     console.dir(div);
// }

// for (div of divs){
//     console.dir(div.innerText);
// }