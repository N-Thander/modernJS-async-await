# `03-async-await-basic.js`

---

### 1️⃣ `async` Functions Return Promises

```javascript
async function example() {}
```

is equivalent to:

```javascript
function example() {
  return Promise.resolve();
}
```

---

### 2️⃣ `await` Pauses the Function (Not the Program)

```javascript
const user = await fetchUser();
```

Only the **current async function pauses**, while the event loop continues.

---

### 3️⃣ Sequential Async Flow

Instead of:

```javascript
fetchUser()
  .then(fetchPosts)
  .then(fetchComments)
```

We write:

```javascript
const user = await fetchUser();
const posts = await fetchPosts(user.id);
const comments = await fetchComments(posts[0]);
```

Much easier to read.

---

### 4️⃣ Error Handling with `try/catch`

Async errors can be handled like synchronous code:

```javascript
try {
  await task();
} catch (err) {
}
```
