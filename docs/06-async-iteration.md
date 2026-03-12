# Async Iteration

Async iteration allows consuming **asynchronous streams of data**.

It is built using:

* async generators
* `for await...of`

---

## Async Generators

```javascript
async function* numbers() {
  yield 1;
  yield 2;
}
```

---

## Consuming Async Generators

```javascript
for await (const n of numbers()) {
  console.log(n);
}
```

---

## Use Cases

Async iteration is useful for:

* streaming data
* paginated APIs
* file streams
* large datasets

---

## Example

```javascript
async function* fetchPages() {
  yield await fetchPage(1);
  yield await fetchPage(2);
}
```

Consumers process data **as it arrives**.
