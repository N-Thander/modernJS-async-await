# Async / Await Cheatsheet

---

### Async Function

```javascript
async function example() {
  return "value";
}
```

---

### Await Promise

```javascript
const data = await fetchData();
```

---

### Sequential Execution

```javascript
await task1();
await task2();
```

---

### Parallel Execution

```javascript
await Promise.all([
  task1(),
  task2()
]);
```

---

### Error Handling

```javascript
try {
  await task();
} catch (err) {}
```

---

### Async Iteration

```javascript
for await (const item of asyncGenerator()) {
}
```

---

### Avoid

```
async + forEach
```

Use:

```
for...of
Promise.all
```

---

### Promise Combinators

```
Promise.all
Promise.allSettled
Promise.race
Promise.any
```

---

### Cancellation

```
AbortController
```
