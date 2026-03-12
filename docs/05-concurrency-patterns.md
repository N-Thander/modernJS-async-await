# Concurrency Patterns

Async operations can run **sequentially** or **in parallel**.

Understanding the difference is essential for performance.

---

## Sequential Execution

```javascript
await task1();
await task2();
await task3();
```

Total time = sum of all tasks.

---

## Parallel Execution

```javascript
await Promise.all([
  task1(),
  task2(),
  task3()
]);
```

Total time = longest task.

---

## When To Use Sequential

When operations depend on previous results.

Example:

```
fetchUser → fetchPosts(user.id)
```

---

## When To Use Parallel

When operations are independent.

Example:

```
fetchUser
fetchNotifications
fetchSettings
```

---

## Performance Tip

Avoid unnecessary sequential `await` calls.
