console.log("Program started");

/*
-------------------------------------
Simulated Async Functions
-------------------------------------
*/

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark", notifications: true });
    }, 1500);
  });
}

/*
-------------------------------------
Top-Level Await Example
-------------------------------------
*/

const user = await fetchUser();
console.log("User:", user);

const settings = await fetchSettings();
console.log("Settings:", settings);

console.log("Initialization complete");

/*
-------------------------------------
Parallel Top-Level Await
-------------------------------------
*/

const [user2, settings2] = await Promise.all([fetchUser(), fetchSettings()]);

console.log("Parallel user:", user2);
console.log("Parallel settings:", settings2);

console.log("Program finished");
