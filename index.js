"use strict";
let title = "TS";
let count = 42; // int and float are both number
let big = 100n;
let done = false;
let nothing = null;
let notSet = undefined;
let id = Symbol("id");
// inference: annotations are usually unnecessary
let inferred = "hello"; // string
const literal = "hello"; // type is the literal "hello"
const nums = [1, 2, 3]; // number[]
const user = { name: "Ann", age: 30 }; // { name: string; age: number }
// contextual typing
[1, 2, 3].forEach((n) => console.log(n.toFixed(1))); // n inferred as number
console.log(title, count, big, done, nothing, notSet, id.toString());
console.log(typeof inferred, typeof literal, nums, user);
function Proc(input, x) {
    if (typeof input === "string")
        return input.toUpperCase();
    if (typeof input === "number")
        return input.toFixed(2);
    if (Array.isArray(input))
        return `array(${input.length})`;
    return "unknown";
}
console.log(Proc("hi", "test"), Proc(3.14159, "test"), Proc([1, 2], "test"), Proc({}, "test"));
function fail(message) {
    throw new Error(message);
}
function log(msg) {
    console.log(msg);
}
log("void function");
try {
    fail("never returns");
}
catch (e) {
    console.log(e.message);
}
const parsed = JSON.parse('{"a":1}');
if (typeof parsed === "object" && parsed !== null && "a" in parsed) {
    console.log("has a:", parsed.a);
}
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
let arr2 = [5, 6, 7];
arr2.push(8);
console.log(arr2);
let arr3 = ["a", "b", "c"];
arr3.push("d");
console.log(arr3);
let arr4 = ["e", "f", "g"];
arr4.push("h");
console.log(arr4);
const ro = [1, 2];
console.log(ro);
// ro.push(3); // Error: Property 'push' does not exist on type 'readonly number[]'.
let pair = ["age", 30, 40];
const named = ["Ann"];
const named2 = ["Bob", true];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 10] = "Left";
    Direction[Direction["Right"] = 11] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
