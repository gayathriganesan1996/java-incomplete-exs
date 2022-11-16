// while loop

// let i=20;
// while(i>=1){
//     if(i %2 !==0){
//         console.log("Odd number" + i);
//     }
//     i--
// }

// //do loop
// let i=5;
// do{
//     if(i %2 !==0){
//         console.log("Odd number" + i);
//     }
//     i++;

// }while(i<=10);


// arrow functions

// const orders = [
//     { id: 1, item: "iPhone", quantity: 1},
//     { id: 2, item: "OnePluse", quantity: 1},
//     {id: 3, item: "vivo", quantity: 1}
    
// ]
// let result = orders.find(function(order){
//     return order.item === "iPhone"
// })
// console.log(result);


// const orders = [
//     { id: 1, item: "iPhone", quantity: 1},
//     { id: 2, item: "OnePluse", quantity: 1},
//     {id: 3, item: "vivo", quantity: 1}
    
// ]
// let result = orders.find((order) => {
//     return order.item === "iPhone"
// })
// console.log(result);


// const orders = [
//     { id: 1, item: "iPhone", quantity: 1},
//     { id: 2, item: "OnePluse", quantity: 1},
//     {id: 3, item: "vivo", quantity: 1}
    
// ]
// let result = orders.find((order) => order.item === "vivo"
// )
// console.log(result);


// //local storage

// localStorage.setItem("username", "Aruna");
// let name = localStorage.getItem("username");
//  let my = localStorage.getItem("lastname");
// console.log(name);
// console.log(my);

// sessionStorage.setItem("lastname", "Gayu");
// sessionStorage.setItem("username", "Priya");

// let x = sessionStorage.getItem("username");
// let y = sessionStorage.getItem("lastname");
//  console.log(x);
//  console.log(y);
//  sessionStorage.removeItem("lastname");

// let a= 7;
// let b= 7;
// let c= a+b;
// console.log(c);

// let a= (a, b) => a+b;
// console.log(a(7,7));


var hello = (val) => "hello "  + val;
console.log(hello ("people!"));

// object la ethavathu oru function irundha adhan method

// current object

// function => global(browser na window la irukum & node la create panna adhu global la irukum)


const channel = {
    name : "js",
    muFunction() {
        console.log(this);
    },
};
channel.muFunction();

