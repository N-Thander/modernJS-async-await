# Cancellation with AbortController

Some async operations can be cancelled using **AbortController**.

---

## Creating a Controller

```javascript
const controller = new AbortController();
```

---

## Passing the Signal

```javascript
fetch(url, {
  signal: controller.signal
});
```

---

## Aborting the Operation

```javascript
controller.abort();
```

This triggers an **abort event**.

---

## Example

```javascript
const controller = new AbortController();

fetch("/api/data", {
  signal: controller.signal
});

controller.abort();
```

---

## Common Use Cases

Cancellation is useful for:

* cancelling API requests
* avoiding race conditions
* cleaning up async operations
