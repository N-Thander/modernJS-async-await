# The Event Loop

The **event loop** coordinates asynchronous execution in JavaScript.

It manages:

* the call stack
* task queues
* execution order

---

## Core Components

### Call Stack

The call stack stores currently executing functions.

Example:

```javascript
function a() {
  b();
}

function b() {
  console.log("Hello");
}

a();
```

Stack flow:

```
a → b → console.log
```

---

### Web APIs / Node APIs

Some operations run outside the JavaScript engine.

Examples:

* timers (`setTimeout`)
* network requests
* file I/O

---

### Task Queue (Macrotasks)

Completed async operations are placed in the **task queue**.

Examples:

* setTimeout
* setInterval
* DOM events

---

### Microtask Queue

Promises use the **microtask queue**.

Examples:

```javascript
Promise.resolve().then(() => console.log("microtask"));
```

Microtasks run **before the next macrotask**.

---

## Execution Order Example

```javascript
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```
Start
End
Promise
Timer
```

---

## Key Rule

Execution order:

```
Call Stack
↓
Microtask Queue
↓
Macrotask Queue
```
