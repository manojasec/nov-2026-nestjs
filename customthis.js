/*
var _this = undefined;
const o = {
  name: "obj",
  regular() { _this= this; return this?.name; },
  arrow: () => typeof this,
  delayed() { setTimeout(() => console.log("arrow keeps this:", this.name), 10); },
};
 
o.x = () => {
       console.log("inside o.x:", _this.name + "new value");
}
console.log(o.regular());
console.log(o.x());

console.log(o.arrow());
o.delayed();
function Animal(name) { 
    this.name = name; 
}
Animal.prototype.speak = function () {
     return `${this.name} makes a sound`;
 };
 const generic = new Animal("Generic");
console.log(generic.speak(), Object.getPrototypeOf(generic) === Animal.prototype);

// classes are syntax over prototypes
class Shape {
  static count = 0;
  #id;                                    // private field
  constructor(name) { this.name = name; this.#id = ++Shape.count; }
  get id() { return this.#id; }
  area() { return 0; }
  toString() { return `${this.name}#${this.#id} area=${this.area().toFixed(2)}`; }
  static create(name) { return new this(name); }
}

class Circle extends Shape {
  constructor(r) { super("Circle"); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}

class Square extends Shape {
  constructor(s) { super("Square"); this.s = s; }
  area() { return this.s ** 2; }
}


const shapes = [new Circle(2), new Square(3)];
shapes.forEach((s) => console.log(String(s)));
console.log(shapes[0] instanceof Shape, Shape.count, shapes[0].id);
console.log(shapes[0].id2, Object.keys(shapes[0]));   // private fields are not enumerable

// Object.create
const proto = { hello() { return "hello from proto"; } };
const child = Object.create(proto);
console.log(child.hello(), Object.hasOwn(child, "hello"));

// mixin
const Serializable = (Base) => class extends Base { toJSON() { return { ...this }; } };
class Point { constructor(x, y) { this.x = x; this.y = y; } }
console.log(JSON.stringify(new (Serializable(Point))(1, 2)));

*/
const m = new Map([["a", 1]]);
m.set({ k: 1 }, "object key").set(42, "number key");
console.log(m.size, m.get("a"), m.has(42));
for (const [k, v] of m) console.log(k, v);

// Set: unique values
const s = new Set([1, 2, 2, 3, 3]);
console.log([...s], s.has(2), s.size);
const A = new Set([1, 2, 3]), B = new Set([2, 3, 4]);
console.log("union", [...new Set([...A, ...B])]);
console.log("intersect", [...A].filter((x) => B.has(x)));
console.log("diff", [...A].filter((x) => !B.has(x)));

// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique
// custom iterable
const range = {
  from: 1, to: 4,
  [Symbol.iterator]() {
    let cur = this.from, end = this.to;
    return { next: () => cur <= end ? { value: cur++, done: false } : { value: undefined, done: true } };
  },
};
console.log([...range]);

// Example of async/await
const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
const asyncFunction = async () => {
  console.log("Fetching...");
  const result = await fetchData();
  console.log("Result:", result);
};
asyncFunction();

const wait = (ms, value, fail = false) =>
  new Promise((resolve, reject) => setTimeout(() => (fail ? reject(new Error(value)) : resolve(value)), ms));

// promise chain
await wait(30, "chain start")
  .then((v) => { console.log(v); return wait(30, "second"); })
  .then((v) => { console.log(v); throw new Error("boom"); })
  .catch((e) => console.log("caught:", e.message))
  .finally(() => console.log("finally"));

  // async / await + try/catch
async function load() {
  try {
    const a = await wait(20, "A");
    const b = await wait(20, "B", true);
    return a + b;
  } catch (e) {
    return "failed: " + e.message;
  }
}

console.log(await load());
var x= new Promise((resolve) => setTimeout(() => resolve("X resolved"), 10));
Promise.all([x, wait(10, "Y")])
  .then((values) => console.log("Promise.all resolved with:", values))
  .catch((err) => console.log("Promise.all rejected with:", err.message));

  var x= new Promise((resolve) => setTimeout(() => resolve("X resolved"), 10));
Promise.allSettled([x, wait(10, "Y")])
  .then((values) => console.log("Promise.allSettled resolved with:", values))
  .catch((err) => console.log("Promise.allSettled rejected with:", err.message));

  console.log(await Promise.race([wait(50, "slow"), wait(10, "fast")]));
console.log(await Promise.any([wait(10, "fail", true), wait(30, "winner")]));

console.log("1 sync start");
setTimeout(() => console.log("5 macrotask: setTimeout 0"), 0);
Promise.resolve().then(() => console.log("3 microtask: promise"));
queueMicrotask(() => console.log("4 microtask: queueMicrotask"));
console.log("2 sync end");
// Variation 1 — Nested microtasks
console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
});

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");


// Pause and predict the output before revealing the answer.
// Reveal answer
// Variation 2 — Promise versus queueMicrotask
console.log("1");

queueMicrotask(() => console.log("2"));

Promise.resolve().then(() => console.log("3"));

queueMicrotask(() => console.log("4"));

console.log("5");


// Reveal answer
// Variation 3 — Timer inside a promise
console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);
});

setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");


// Reveal answer
// Variation 4 — async/await
console.log("1");

async function test() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

test();

console.log("4");


// Reveal answer
// Variation 5 — Multiple await statements
async function test() {
  console.log("A");
  await null;
  console.log("B");
  await null;
  console.log("C");
}

console.log("1");
test();
console.log("2");

Promise.resolve().then(() => console.log("D"));


// Reveal answer
// Variation 6 — Promise chaining
console.log("1");

Promise.resolve()
  .then(() => {
    console.log("2");
    return "hello";
  })
  .then((value) => {
    console.log("3", value);
  });

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");


// Reveal answer
// Variation 7 — Nested setTimeout
console.log("A");

setTimeout(() => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);

  Promise.resolve().then(() => {
    console.log("D");
  });
}, 0);

setTimeout(() => {
  console.log("E");
}, 0);

console.log("F");


// Reveal answer
// Variation 8 — queueMicrotask inside a promise
console.log("1");

Promise.resolve().then(() => {
  console.log("2");

  queueMicrotask(() => {
    console.log("3");
  });
});

queueMicrotask(() => {
  console.log("4");
});

console.log("5");


// Reveal answer
//  Variation 9 — setTimeout versus await
console.log("A");

setTimeout(() => console.log("B"), 0);

(async () => {
  console.log("C");
  await Promise.resolve();
  console.log("D");
})();

Promise.resolve().then(() => console.log("E"));

console.log("F");


// Reveal answer
// Variation 10 — Advanced: Promise, await, and timer ordering
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(async () => {
  console.log("4");

  await null;

  console.log("5");
});

queueMicrotask(() => {
  console.log("6");
});

console.log("7");


// Reveal answer
//  Interview cheat sheet
/*
Task	Execution behavior
Normal console.log()	Synchronous
Promise.then()	Microtask
queueMicrotask()	Microtask
Code after await	Microtask continuation
setTimeout() callback	Timer task / macrotask
Promise inside timer	Runs as a microtask after that timer callback finishes
One important interview nuance: “Macrotask” is a commonly used teaching term; browser specifications generally refer to tasks and task queues. Also, setTimeout(fn, 0) means the callback becomes eligible to run later, not that it runs at exactly zero milliseconds.
*/