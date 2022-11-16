const name = ["gayu", "priya", "jeni"];
document.getElementById("demo2").innerHTML = name;
name[2] = "dharshini";
console.log(name[2]); //index



console.log(name);
console.log(name.length);
name.pop();
console.log(name);

name.push("benika", "dhivya", "ganesh");
console.log(name);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits.toString());
console.log(fruits.join(" & "));



const color = ["blue", "black", "red", "green", "gray"];
console.log(color);

color.shift();
console.log(color);

color.unshift("yellow");
console.log(color);

color[1] = "blue";
console.log(color);
console.log(color.length);
console.log(color);

const boys = ["ganesh", "raj", "vicky"];
const girls = ["gayu", "siby", "dharshini"];
const total = [ boys.concat(girls)];
console.log(total);