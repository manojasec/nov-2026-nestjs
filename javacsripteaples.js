 var x=10;
 function a() {
    var x=20;
    console.log(x);
    x="new value ";
    console.log(x);
    const innerFunction = () => {
        console.log("Inside inner function");
        console.log(x);

    }
    innerFunction();
 }

 a();
console.log(x);
function b() {
    x=100;
    console.log(x);
    x="new value ";
    console.log(x);
 }
 b();
 console.log(x);

console.log("------")
 let y=10;
 function a() {
    let x=20;
    console.log(x);
    x="new value ";
    console.log(x);
 }

 a();
console.log(y);
// function b() {
//     y=100;
//     console.log(y);
//     y="new value ";
//     console.log(y);
//     let y=50
//  }
//  b();
 console.log(y);

 const z=10;
 console.log(z);
// z=100; // This will cause an error because z is a constant
// console.log(z);

const obj={name: "John"}
console.log(obj);
obj.name="Doe";
obj.age=30;
console.log(obj);
console.log(obj);
// obj={name: "Smith"}; // This will cause an error because obj is a constant
// console.log(obj);
 

var obj2={name: "Alice"};
console.log(obj2);
obj2.name="Bob";
console.log(obj2);

var obj3=obj2;
console.log(obj3);
obj3.name="Charlie";
console.log(obj3);
console.log(obj2);


var obj3=Object.assign({}, obj2);
console.log(obj3);
obj3.name="Charlie";
console.log(obj3);
console.log(obj2);

var obj3=JSON.parse(JSON.stringify(obj2));
console.log(obj3);
obj3.name="Charlie";
console.log(obj3);
console.log(obj2);
// mostly underscore is used in variable names to indicate private or internal properties

var u=10
var w=u;
console.log(u);
console.log(w);
w=20;
console.log(u);
console.log(w);

  const arr = ["a", "b"];
for (const v of arr){
    console.log("of", v);
}   
for (const k in { x: 1, y: 2 }) {
    console.log("in", k); // enumerable keys
}
for (const [i, v] of arr.entries()) {
    console.log(i, v);
}   


const m = (x, y)=> x *y; // fat arrow function
const p = u => u * u ; // fat arrow function for squaring a number
console.log("the product is ",m(5, 3));
console.log("the square is ",p(5));

(function() {
    var x=25255;
    console.log("Immediately Invoked Function Expression (IIFE) 1");
})();

 (()=>{
    console.log("Immediately Invoked Function Expression (IIFE) 4");
 })();

 // merge / copy
const merged = { ...{ a: 1, b: 2 }, ...{ b: 3, c: 4 } };
console.log(merged, Object.assign({}, merged));


var [name, a] = ["John", 25];   
console.log(name, a);

var {name: n, a: age} = {name: "John", a: 25}
console.log(n, age) ;
let obj5 = {name: "Jane", age: 30,salary:6000};
var {name, age} = obj5; 

// var name = obj5.name;
// var age = obj5.age;
// var salary = obj5.salary;
console.log(name, age);

const list = [1, 2, 3];
const next = [...list, 4];
console.log(next);

const user = { id: 1,   tags: ["x", "y"] };
const user2= {...user, address: { city: "Pune", zip: "411001" } };
console.log(user2);

function abc(arr){
  for(var i=0; i<10; i++){
    console.log(arr[i]);
  }
}function abc(arr){
  for(var i=0; i<10; i++){
    console.log(arr[i]);
  }
}