# 01-callbacks.js

### 1️⃣ Non-blocking behavior

Even though setTimeout is used, JavaScript doesn't block execution.

---

### 2️⃣ Callback chaining

```
fetchUser → fetchPosts → fetchComments
Each step depends on the previous result.
```

---

### 3️⃣ Callback Hell Problem

Nested structure becomes hard to read:

```
fetchUser(() => {
    fetchPosts(() => {
        fetchComments(() => {
            .
            .
            .
        });
    });
});
```

---

1. hard to read
2. hard to debug
3. error handling becomes messy
4. deep nesting

---

> "Callbacks work, but they don't scale well. To solve this problem JavaScript introduced Promises."

---
