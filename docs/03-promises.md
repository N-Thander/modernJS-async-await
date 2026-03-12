# Promises

A **Promise** represents a future value of an asynchronous operation.

It solves problems associated with **callback-based code**.

---

## Promise States

A Promise has three states:

```
pending
fulfilled
rejected
```

---

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

---

## Consuming a Promise

```javascript
promise.then((value) => {
  console.log(value);
});
```

---

## Error Handling

```javascript
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## Promise Chaining

```javascript
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => console.log(posts));
```

---

## Promise Combinators

### Promise.all

Runs tasks in parallel.

```javascript
Promise.all([task1(), task2()]);
```

---

### Promise.allSettled

Waits for all tasks to finish.

---

### Promise.race

Returns the first settled promise.

---

### Promise.any

Returns the first fulfilled promise.

---

## Why Promises Matter

They provide:

* better structure than callbacks
* centralized error handling
* composition of async operations
