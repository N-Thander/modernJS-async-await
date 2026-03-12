# `05-promise-combinators.js`

## `Promise.all`

Use when **all tasks must succeed**.

Example use cases:

* loading multiple APIs for a page
* fetching user profile + settings + notifications

Behavior:

```
Fails fast if any promise rejects
```

---

## `Promise.allSettled`

Use when you **need results even if some fail**.

Example use cases:

* loading optional services
* batch operations

Output format:

```javascript
[
  { status: "fulfilled", value: ... },
  { status: "rejected", reason: ... }
]
```

---

## `Promise.race`

Returns the **first settled promise**.

Use cases:

* implementing **timeouts**
* competing APIs

Example timeout pattern:

```javascript
await Promise.race([
  fetchData(),
  timeout(2000)
])
```

---

## `Promise.any`

Returns the **first successful promise**.

Use cases:

* redundant servers
* fallback APIs
* CDN mirrors

Fails only when:

```
ALL promises reject
```

---


| Method             | Resolves When  | Rejects When  |
| ------------------ | -------------- | ------------- |
| Promise.all        | All succeed    | Any fails     |
| Promise.allSettled | All finish     | Never rejects |
| Promise.race       | First settles  | First rejects |
| Promise.any        | First succeeds | All fail      |

---

