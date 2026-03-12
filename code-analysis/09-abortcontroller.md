# `09-abortcontroller.js`

## 1️⃣ Creating an AbortController

```javascript
const controller = new AbortController();
```

It provides a **signal** that async operations can listen to.

---

## 2️⃣ Passing the Signal

```javascript
fetchData(controller.signal)
```

The async function listens for the **abort event**.

---

## 3️⃣ Cancelling the Operation

```javascript
controller.abort();
```

This triggers:

```
signal.abort event
```

and the async operation can **stop early**.

---

## Expected Output

When you run:

```
node examples/09-abortcontroller.js
```

You will see something like:

```
Program started
Starting long-running request...
Aborting request...
Error: Request was aborted
Program finished
```

The operation **never completes** because it was cancelled.

---

## Real-World Uses

`AbortController` is commonly used for:

### Cancelling HTTP requests

Example:

```javascript
const controller = new AbortController()

fetch(url, { signal: controller.signal })
```

---

### Preventing UI race conditions

Example:

User searches quickly:

```
search "j"
search "ja"
search "jav"
```

Previous requests should be **cancelled**.

---

### Cleaning up async work

Example:

* React components unmounting
* cancelling background jobs

---