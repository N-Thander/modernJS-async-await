# Common Async Pitfalls

Even experienced developers make mistakes with async code.

---

## Async Inside forEach

Incorrect:

```javascript
items.forEach(async item => {
  await process(item);
});
```

`forEach` does not wait for Promises.

Correct:

```javascript
for (const item of items) {
  await process(item);
}
```

---

## Floating Promises

Not awaiting a Promise can cause silent errors.

```javascript
fetchData(); // promise ignored
```

Always handle the Promise.

---

## Unhandled Rejections

Always catch errors.

```javascript
try {
  await task();
} catch (err) {
  console.error(err);
}
```

---

## Blocking Await Chains

Unnecessary sequential awaits reduce performance.
