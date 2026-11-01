var name = "manoj"
undefined
var name="world"
undefined
name = "abcd" 
console.log(name);

// let name="manoj";
function myFunction() {
    
    name="manoj";
    console.log(name);
    function myFunction() {
    
        name="manoj";
        console.log(name);
    }
    return myFunction;
}

var x= myFunction();
x();

console.log(typeof name);

var name = "manoj"
undefined
var name="world"
undefined
name = "abcd"
'abcd'

console.log(typeof name);

var obj ={name:"mano", age:10};
var arr=[];
console.log(typeof arr);
console.log(typeof obj);

function sum (arr){
    if(!Array.isArray(arr)){
        return true;
    }
    var s=0
    for(var i=0;i<arr.length;i++){
        console.log(arr[i])
       s=  arr[i] + arr[i] ;
    }
    console.log(s)
}
sum(undefined)

var x=10
var y=x;
console.log(y);
x=20;
console.log(y);

var x={name:"manoj", age:10};
var y=x;
console.log(y);
x.name="abcd";
console.log(y);