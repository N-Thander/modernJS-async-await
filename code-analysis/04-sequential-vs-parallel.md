# `04-sequential-vs-parallel.js`


### Sequential (slow)

```
await task1
await task2
await task3
```

Total time:

```
1s + 1s + 1s = 3s
```

---

### Parallel (fast)

```
Promise.all([task1, task2, task3])
```

Total time:

```
max(task time) = 1s
```

---

# Rule of Thumb

Use **sequential await** when:

```
task2 depends on task1
```

Example:

```
fetchUser → fetchPosts(user.id)
```

---

Use **Promise.all** when:

```
tasks are independent
```

Example:

```
fetchUser
fetchNotifications
fetchSettings
```

---
