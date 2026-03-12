# JavaScript Concurrency Model

JavaScript runs on a **single thread**, meaning only one piece of code executes at a time.

However, modern applications need to handle:

* network requests
* timers
* file operations
* user events

To support this efficiently, JavaScript uses an **event-driven, asynchronous execution model**.

---

## Single Threaded Execution

JavaScript executes code on a **single call stack**.

Example:

```javascript
function task1() {
  console.log("Task 1");
}

function task2() {
  console.log("Task 2");
}

task1();
task2();
```

Output:

```
Task 1
Task 2
```

Each function runs **sequentially**.

---

## The Problem With Blocking Code

Consider a slow operation:

```javascript
function slowTask() {
  const start = Date.now();
  while (Date.now() - start < 3000) {}
}

slowTask();
console.log("Finished");
```

The program freezes for **3 seconds**.

This is called **blocking execution**.

---

## Non-Blocking Operations

Instead of blocking the thread, JavaScript schedules work asynchronously.

Example:

```javascript
setTimeout(() => {
  console.log("Async task finished");
}, 2000);

console.log("Program continues...");
```

Output:

```
Program continues...
Async task finished
```

---

## Why Async Programming Exists

Async programming allows JavaScript to:

* handle many tasks efficiently
* keep the UI responsive
* process network requests without freezing the program

---
