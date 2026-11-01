let title: string = "TS";
let count: number = 42;           // int and float are both number
let big: bigint = 100n;
let done: boolean = false;
let nothing: null = null;
let notSet: undefined = undefined;
let id: symbol = Symbol("id");

// inference: annotations are usually unnecessary
let inferred = "hello";           // string
const literal = "hello";          // type is the literal "hello"
const nums = [1, 2, 3];           // number[]
const user = { name: "Ann", age: 30 };   // { name: string; age: number }

// contextual typing
[1, 2, 3].forEach((n) => console.log(n.toFixed(1)));   // n inferred as number

console.log(title, count, big, done, nothing, notSet, id.toString());
console.log(typeof inferred, typeof literal, nums, user);
function Proc(input: string | number | unknown[],x:string): string {
  if (typeof input === "string") return input.toUpperCase();
  if (typeof input === "number") return input.toFixed(2);
  if (Array.isArray(input)) return `array(${input.length})`;
  return "unknown";
}
console.log(Proc("hi","test"), Proc(3.14159,"test"), Proc([1, 2],"test"), Proc({},"test"));
    
function fail(message: string): never {
  throw new Error(message);
}
function log(msg: string): void {
  console.log(msg);
}
log("void function");
try { fail("never returns"); } catch (e) { console.log((e as Error).message); }

const parsed: unknown = JSON.parse('{"a":1}');
if (typeof parsed === "object" && parsed !== null && "a" in parsed) {
  console.log("has a:", (parsed as { a: number }).a);
}

let arr: number[] = [1, 2, 3];
arr.push(4);
console.log(arr);
let arr2: Array<number> = [5, 6, 7];
arr2.push(8);
console.log(arr2);
let arr3: string[] = ["a", "b", "c"];
arr3.push("d");
console.log(arr3);
let arr4: Array<string> = ["e", "f", "g"];
arr4.push("h");
console.log(arr4);
const ro: readonly number[] = [1, 2]; 
console.log(ro);
// ro.push(3); // Error: Property 'push' does not exist on type 'readonly number[]'.

let pair: [string, number, number] = ["age", 30, 40];
const named: [name: string, active?: boolean] = ["Ann"];
const named2: [name: string, active?: boolean] = ["Bob", true];
enum Direction { MALE=2, Down, Left = 10, Right }
console.log(Direction.MALE, Direction.Down, Direction.Left, Direction.Right);
enum Status { Active = "ACTIVE", Inactive = "INACTIVE" }
console.log(Status.Active);
console.log(Status.Inactive);

// const enum vs union of literals (often preferred: zero runtime code)
type Role = "admin" | "user" | "guest";
const r: Role = "admin";
console.log(r);

type BinaryOp = (a: number, b: number) => number;
const add: BinaryOp = (a, b) => a + b;
const mul: BinaryOp = (a, b) => a * b;
console.log(add(2, 3), mul(2, 3));
const ops: Record<string, BinaryOp> = { add, mul };

// callbacks
function apply<T, R>(items: T[], fn: (item: T, index: number) => R): R[] {
  return items.map(fn);
}

interface User {
  readonly id: number;              // cannot be reassigned
  name: string;
  email?: string;                   // optional
  greet(): string;
}

interface Admin extends User {
  permissions: string[];
}
const admin: Admin = {
  id: 1,
  name: "Ann",
  permissions: ["all"],
  greet() { return `Hi, ${this.name}`; },
};
console.log(admin.greet(), admin.permissions);
// type alias
type Point = { x: number; y: number };
type ID = string | number;
type Callback = (err: Error | null, data?: string) => void;
interface Dictionary { [key: string]: any }
const scores: Dictionary = { math: 90, art: 85 };
scores.music = 70;

type Direction2 = "north" | "south" | "east" | "west";
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
function move(d: Direction2, steps: Dice) { return `${steps} ${d}`; }
console.log(move("north", 3));
// template literal types
let Event = `on ${title}`; 

type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;
const person: Person = { name: "Bob", age: 25 };
console.log(person);

 interface Cat { meow(): void }
interface Dog { bark(): void }
function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

interface Printable { print(): string }

abstract class Shape implements Printable {
  static count = 0;
  protected readonly id: number;

  // parameter properties: declare + assign in one go
  constructor(public readonly name: string, private color: string = "black") {
    this.id = ++Shape.count;
  }
  abstract area(): number;
  print(): string { return `${this.name}#${this.id} (${this.color}) area=${this.area().toFixed(2)}`; }
}

class Circle extends Shape {
  constructor(private radius: number) { super("Circle", "red"); }
  area(): number { return Math.PI * this.radius ** 2; }
}

class Rect extends Shape {
  constructor(private w: number, private h: number) { super("Rect"); }
  area(): number { return this.w * this.h; }
  override print(): string { return "[Rect] " + super.print(); }
}

const shapes: Shape[] = [new Circle(2), new Rect(2, 3)];
shapes.forEach((s) => console.log(s.print()));
console.log(Shape.count);

// JS private fields (#) are enforced at runtime too
class Account {
  #balance = 0;
  deposit(n: number): this { this.#balance += n; return this; }
  get balance(): number { return this.#balance; }
}
console.log(new Account().deposit(10).deposit(5).balance);

// accessors and index signatures in classes
class Temp {
  constructor(private _c: number) {}
  get f(): number { return this._c * 9 / 5 + 32; }
  set f(v: number) { this._c = (v - 32) * 5 / 9; }
}
const t = new Temp(100);
console.log(t.f);