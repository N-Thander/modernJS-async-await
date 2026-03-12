# `06-top-level-await.mjs`

## 1. Await Without Async Function

Normally you must write:

```javascript
async function main() {
  const data = await fetchData();
}
main();
```

With **top-level await**, you can simply write:

```javascript
const data = await fetchData();
```

---

## 2. Useful for Initialization Code

Common real-world uses:

* loading configuration
* connecting to databases
* loading environment secrets
* fetching startup data

Example:

```javascript
const config = await loadConfig();
```

---

## 3. Sequential vs Parallel Still Applies

Even with top-level await:

### Sequential

```javascript
const user = await fetchUser();
const settings = await fetchSettings();
```

### Parallel

```javascript
const [user, settings] = await Promise.all([
  fetchUser(),
  fetchSettings()
]);
```

---

### Important Caveat 

Top-level await **blocks module loading**.

If another module imports this one:

```
moduleA → moduleB
```

and moduleB has top-level await, **moduleA must wait for it to finish**.

This can introduce **module loading delays**.

---

### Expected Output

```
Program started
User: { id: 1, name: 'Alice' }
Settings: { theme: 'dark', notifications: true }
Initialization complete
Parallel user: { id: 1, name: 'Alice' }
Parallel settings: { theme: 'dark', notifications: true }
Program finished
```
