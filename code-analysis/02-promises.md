# `02-promises.js`

---

### 1. Promise Creation

```javascript
new Promise((resolve, reject) => {})
```

A Promise has **two outcomes**:

* `resolve(value)` → success
* `reject(error)` → failure

---

### 2. Promise Chaining

Instead of nested callbacks:

```
fetchUser
 → fetchPosts
   → fetchComments
```

You can chain:

```javascript
fetchUser()
  .then(fetchPosts)
  .then(fetchComments)
```

This removes **callback nesting**.

---

### 3. Error Handling

With callbacks you had to manually pass errors.

Promises allow **centralized error handling**:

```javascript
.catch(error => {})
```

---

### 4. Parallel Execution

Using:

```javascript
Promise.all([task1, task2])
```

multiple async tasks can run **simultaneously**.

---

> Promises solved callback hell, but `.then()` chains can still become complex.
> JavaScript introduced **async/await** to make asynchronous code look like synchronous code.

