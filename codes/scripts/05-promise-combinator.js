console.log("Program started");

/*
-------------------------------------
Simulated Async Tasks
-------------------------------------
*/

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 completed");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Task 3 failed"));
    }, 1500);
  });
}

/*
-------------------------------------
Example 1 — Promise.all
-------------------------------------
Returns when ALL promises resolve.
Fails immediately if ANY promise rejects.
*/

async function exampleAll() {
  console.log("\nPromise.all example");

  try {
    const results = await Promise.all([task1(), task2(), task3()]);

    console.log("Results:", results);
  } catch (err) {
    console.error("Promise.all error:", err.message);
  }
}

/*
-------------------------------------
Example 2 — Promise.allSettled
-------------------------------------
Waits for ALL promises to finish
(regardless of success or failure).
*/

async function exampleAllSettled() {
  console.log("\nPromise.allSettled example");

  const results = await Promise.allSettled([task1(), task2(), task3()]);

  console.log("Results:", results);
}

/*
-------------------------------------
Example 3 — Promise.race
-------------------------------------
Returns the FIRST promise that settles
(resolve OR reject).
*/

async function exampleRace() {
  console.log("\nPromise.race example");

  try {
    const result = await Promise.race([task1(), task2(), task3()]);

    console.log("Winner:", result);
  } catch (err) {
    console.error("Race rejected:", err.message);
  }
}

/*
-------------------------------------
Example 4 — Promise.any
-------------------------------------
Returns the FIRST fulfilled promise.
Ignores rejected promises.
Fails only if ALL promises reject.
*/

async function exampleAny() {
  console.log("\nPromise.any example");

  try {
    const result = await Promise.any([
      task3(), // fails
      task1(), // succeeds
      task2(),
    ]);

    console.log("First successful result:", result);
  } catch (err) {
    console.error("All promises failed:", err);
  }
}

/*
-------------------------------------
Run all examples
-------------------------------------
*/

async function run() {
  await exampleAll();
  await exampleAllSettled();
  await exampleRace();
  await exampleAny();
}

run();

console.log("Program finished (async operations running)");
