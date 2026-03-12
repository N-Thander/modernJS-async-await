# `07-async-iteration.mjs`

## 1️⃣ Async Generators

Async generators allow you to **produce asynchronous values over time**.

```javascript
async function* generator() {}
```

They combine:

* **async functions**
* **generators (`yield`)**

---

## 2️⃣ Yielding Values

```javascript
yield user;
```

Each `yield` pauses execution until the consumer requests the next value.

---

## 3️⃣ `for await...of`

This loop works with **async iterables**.

```javascript
for await (const item of asyncGenerator()) {
}
```

It automatically:

* waits for promises
* retrieves values one-by-one

---

## Why Async Iteration is Powerful

It is commonly used for:

### Streaming APIs

Example:

```
reading large datasets
```

---

### Pagination

Example:

```
GitHub API
database pagination
```

---

### File Streams

Example:

```
reading files in chunks
```

---

### Example Execution Flow

```
fetch page 1
yield User A
yield User B

fetch page 2
yield User C
yield User D

fetch page 3
yield User E
yield User F
```

Consumers receive data **incrementally** instead of waiting for everything.

---
