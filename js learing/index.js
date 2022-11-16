const colors = ["blue", "red", "orange", "yellow"];
console.log(colors.sort());

const animal = ["cat", "tiger", "lion"];
console.log(animal.reverse());


const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());

// const number = [40, 100, 1, 5, 25, 10];
// console.log(number.sort(function(a,b){return a-b}));


// const numbers = [45, 4, 9, 16, 25];

// const number = [23, 45, 67, 89];
// let txt = " ";
// number.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array){
//     txt += value +"<br>";
// }

//  const number = [3, 4, 5, 6, 7];
//  const number2 = number.map(myFunction);
//  document.getElementById("demo1").innerHTML = number2;

//  function myFunction(value, index, array){
//      return value * 10;
//  }

// const val = [100, 200, 300, 4];
// const val2 = val.filter(myFunction);
// document.getElementById("demo2").innerHTML = val2;

// function myFunction(value, index, array){
//     return value <  45;
// }

// const name = [10, 20, 30, 40];
// const name1 = name.reduce(myFunction, 10);
// document.getElementById("demo3").innerHTML = +name1;

// function myFunction(total, value){
//     return total + value;
// }

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Orange") +1;

// document.getElementById("demo4").innerHTML = "Orange is found position"  + position;

const d = new Date();
document.getElementById("demo6").innerHTML = d;
let hrs = 15;
// if (hrs < 18) {
//     document.getElementById("demo7").innerHTML = "Good Evng!";
// }
// else (hrs > 18 ) {
//     document.getElementById("demo7").innerHTML = "Good Morning!";
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 1; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo8").innerHTML = text;


// let txt = "";
// for ( let i = 0; i < 10; i++) {
//     txt += "The number is" + i + "<br>";
// }
// document.getElementById("demo9").innerHTML = txt;


// let txt= " ";
// let i= 0;
// while(i<=10) {
//     txt += "<br> the number is" +i;
//     i++;
// }

// document.getElementById("demo10").innerHTML = txt;

// let txt = " "
// let i = 0;
// do {
//     txt += "<br> the number is:" + i;
//     i++;
// }
// while (i <= 10);

// document.getElementById("demo11").innerHTML = txt;


// let txt = " ";
// for (let i=0; i<10; i++){
//     if (i===7){ break; }
//     txt += "The  number is" + i + "<br>"
// }

// document.getElementById("demo15").innerHTML = txt;

let text = " ";
for (let i=0; i<10; i++) {
    if(i===4) { continue; }
    text += "The number is " + i + "<br>";
}

document.getElementById("demo12").innerHTML = text;