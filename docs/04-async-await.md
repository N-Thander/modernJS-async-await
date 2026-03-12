# Async / Await

`async/await` is syntactic sugar built on top of Promises.

It allows asynchronous code to look like synchronous code.

---

## Async Functions

```javascript
async function greet() {
  return "Hello";
}
```

Async functions always return a **Promise**.

---

## Await

`await` pauses execution inside an async function until a Promise resolves.

```javascript
async function getUser() {
  const user = await fetchUser();
  return user;
}
```

---

## Sequential Execution

```javascript
const user = await fetchUser();
const posts = await fetchPosts(user.id);
```

Each step waits for the previous one.

---

## Error Handling

```javascript
try {
  const data = await fetchData();
} catch (err) {
  console.error(err);
}
```

---

## Benefits

Async/await provides:

* readable code
* easier error handling
* simpler control flow
