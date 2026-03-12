console.log("Program started");

/*
-------------------------------------
Example 1 — Creating a Promise
-------------------------------------
*/

function fetchUser() {
  return new Promise((resolve, reject) => {
    console.log("Fetching user...");

    setTimeout(() => {
      const user = { id: 1, name: "Alice" };

      // simulate success
      resolve(user);

      // simulate error
      // reject(new Error("User not found"));
    }, 1000);
  });
}

fetchUser().then((user) => {
  console.log("User received:", user);
});

/*
-------------------------------------
Example 2 — Promise Chaining
-------------------------------------
*/

function fetchPosts(userId) {
  return new Promise((resolve) => {
    console.log("Fetching posts for user:", userId);

    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      resolve(posts);
    }, 1000);
  });
}

function fetchComments(post) {
  return new Promise((resolve) => {
    console.log("Fetching comments for:", post);

    setTimeout(() => {
      const comments = ["Great!", "Nice!", "Very helpful"];
      resolve(comments);
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    return fetchPosts(user.id);
  })
  .then((posts) => {
    return fetchComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  });

/*
-------------------------------------
Example 3 — Error Handling
-------------------------------------
*/

function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Network request failed"));
    }, 500);
  });
}

fetchDataWithError()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Caught error:", error.message);
  });

/*
-------------------------------------
Example 4 — Promise.all (Parallel Execution)
-------------------------------------
*/

function fetchProduct() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Product Data"), 1000);
  });
}

function fetchReviews() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Reviews Data"), 1200);
  });
}

Promise.all([fetchProduct(), fetchReviews()])
  .then(([product, reviews]) => {
    console.log("Product:", product);
    console.log("Reviews:", reviews);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

console.log("Program finished (async tasks running)");
