# `08-foreach-trap.js`

## The Problem with `forEach`

This looks correct but **does not behave as expected**:

```javascript
items.forEach(async (item) => {
  await processItem(item);
});
```

Reason:

* `forEach` **does not await Promises**
* The loop finishes immediately

Output example:

```
Incorrect Example (forEach)
Finished loop (but async tasks still running)
Processed item 1
Processed item 2
Processed item 3
```

---

### Correct Solution 1 — Sequential Processing

Use `for...of` when tasks must happen **one after another**.

```javascript
for (const item of items) {
  await processItem(item);
}
```

---

### Correct Solution 2 — Parallel Processing

Use `Promise.all` when tasks are **independent**.

```javascript
await Promise.all(
  items.map(item => processItem(item))
);
```

---

| Goal                  | Pattern            |
| --------------------- | ------------------ |
| sequential processing | `for...of + await` |
| parallel processing   | `Promise.all()`    |
| avoid                 | `forEach + async`  |

---
