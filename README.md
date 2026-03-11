# Async / Await Deep Dive in JavaScript

A structured learning repository explaining **how asynchronous programming works in JavaScript** and how `async/await` simplifies working with asynchronous code.

This repo is designed for **presentations, workshops, and self-learning**. It covers the JavaScript concurrency model, the event loop, Promises, async/await, concurrency patterns, common pitfalls, and practical patterns used in real applications.

---

# Why This Repository Exists

JavaScript is **single-threaded**, yet it handles thousands of asynchronous operations efficiently.

Understanding **how the event loop, Promises, and async/await work together** is essential for writing scalable JavaScript applications.

This repository helps you learn:

* Why asynchronous programming exists in JavaScript
* How the **event loop** schedules work
* How **Promises** manage asynchronous results
* How **async/await** simplifies asynchronous code
* How to implement **parallel execution and concurrency**
* Common **pitfalls and debugging strategies**

---

# Learning Roadmap

Follow the topics in this order for the best understanding.

1. JavaScript concurrency model
2. Event loop and task queues
3. Promises and asynchronous control flow
4. Async functions and `await`
5. Sequential vs parallel execution
6. Promise combinators (`Promise.all`, `race`, etc.)
7. Async iteration (`for await...of`)
8. Common async pitfalls
9. Cancellation using `AbortController`

---

# Repository Structure

```
async-await-deep-dive
│
├── docs
│   ├── 01-javascript-concurrency.md
│   ├── 02-event-loop.md
│   ├── 03-promises.md
│   ├── 04-async-await.md
│   ├── 05-concurrency-patterns.md
│   ├── 06-async-iteration.md
│   ├── 07-pitfalls.md
│   ├── 08-cancellation.md
│   └── cheatsheet.md
│
├── codes
│   ├── index.html
│   ├── setup.md
│   ├── scripts
│       ├── 01-callbacks.js
│       ├── 02-promises.js
│       ├── 03-async-await-basic.js
│       ├── 04-sequential-vs-parallel.js
│       ├── 05-promise-combinators.js
│       ├── 06-top-level-await.mjs
│       ├── 07-async-iteration.mjs
│       ├── 08-foreach-trap.js
│       └── 09-abortcontroller.js
│
└── assets
```

---
