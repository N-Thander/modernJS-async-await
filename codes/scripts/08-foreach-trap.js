console.log("Program started");

const items = [1, 2, 3];

/*
-------------------------------------
Simulated Async Task
-------------------------------------
*/

function processItem(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed item ${item}`);
      resolve();
    }, 1000);
  });
}

/*
-------------------------------------
Example 1 — Incorrect (forEach Trap)
-------------------------------------
*/

async function incorrectExample() {
  console.log("\nIncorrect Example (forEach)");

  items.forEach(async (item) => {
    await processItem(item);
  });

  console.log("Finished loop (but async tasks still running)");
}

/*
-------------------------------------
Example 2 — Correct Sequential Loop
-------------------------------------
*/

async function correctSequential() {
  console.log("\nCorrect Sequential Loop (for...of)");

  for (const item of items) {
    await processItem(item);
  }

  console.log("Finished sequential processing");
}

/*
-------------------------------------
Example 3 — Correct Parallel Execution
-------------------------------------
*/

async function correctParallel() {
  console.log("\nCorrect Parallel Execution (Promise.all)");

  await Promise.all(items.map((item) => processItem(item)));

  console.log("Finished parallel processing");
}

/*
-------------------------------------
Run examples
-------------------------------------
*/

async function run() {
  await incorrectExample();

  // Wait a bit so output is easier to see
  await new Promise((resolve) => setTimeout(resolve, 4000));

  await correctSequential();
  await correctParallel();
}

run();

console.log("Program finished");
