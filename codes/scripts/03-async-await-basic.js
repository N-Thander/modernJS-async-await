console.log("Program started");

/*
-------------------------------------
Example 1 — Basic Async Function
-------------------------------------
*/

async function getGreeting() {
  return "Hello from async function!";
}

getGreeting().then((message) => {
  console.log(message);
});

/*
-------------------------------------
Example 2 — Awaiting a Promise
-------------------------------------
*/

function fetchUser() {
  return new Promise((resolve) => {
    console.log("Fetching user...");

    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log("User received:", user);
}

getUser();

/*
-------------------------------------
Example 3 — Sequential Async Operations
-------------------------------------
*/

function fetchPosts(userId) {
  return new Promise((resolve) => {
    console.log("Fetching posts for user:", userId);

    setTimeout(() => {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
}

function fetchComments(post) {
  return new Promise((resolve) => {
    console.log("Fetching comments for:", post);

    setTimeout(() => {
      resolve(["Great!", "Nice!", "Very helpful"]);
    }, 1000);
  });
}

async function getUserContent() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0]);

  console.log("User:", user);
  console.log("Posts:", posts);
  console.log("Comments:", comments);
}

getUserContent();

/*
-------------------------------------
Example 4 — Error Handling with try/catch
-------------------------------------
*/

function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Network request failed"));
    }, 800);
  });
}

async function loadData() {
  try {
    const data = await fetchDataWithError();
    console.log("Data:", data);
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

loadData();

console.log("Program finished (async operations still running)");
