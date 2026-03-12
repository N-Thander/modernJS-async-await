console.log("Program started");

/*
-------------------------------------
Simulated Async Operation
-------------------------------------
*/

function fetchData(signal) {
  return new Promise((resolve, reject) => {
    console.log("Starting long-running request...");

    const timeout = setTimeout(() => {
      resolve("Data received from server");
    }, 5000);

    // Listen for abort signal
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new Error("Request was aborted"));
    });
  });
}

/*
-------------------------------------
AbortController Example
-------------------------------------
*/

async function runExample() {
  const controller = new AbortController();
  const signal = controller.signal;

  const request = fetchData(signal);

  // Cancel the request after 2 seconds
  setTimeout(() => {
    console.log("Aborting request...");
    controller.abort();
  }, 2000);

  try {
    const result = await request;
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

runExample();

console.log("Program finished (async operations running)");
