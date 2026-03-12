console.log("Program started");

/*
-------------------------------------
Example 1 — Basic Callback
-------------------------------------
*/

function fetchUser(callback) {
  console.log("Fetching user...");

  setTimeout(() => {
    const user = { id: 1, name: "Alice" };
    callback(user);
  }, 1000);
}

fetchUser((user) => {
  console.log("User received:", user);
});

/*
-------------------------------------
Example 2 — Multiple Async Steps
-------------------------------------
*/

function fetchPosts(userId, callback) {
  console.log("Fetching posts for user:", userId);

  setTimeout(() => {
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(posts);
  }, 1000);
}

fetchUser((user) => {
  fetchPosts(user.id, (posts) => {
    console.log("Posts:", posts);
  });
});

/*
-------------------------------------
Example 3 — Callback Hell
-------------------------------------
*/

function fetchComments(post, callback) {
  console.log("Fetching comments for:", post);

  setTimeout(() => {
    const comments = ["Great!", "Nice post!", "Very helpful"];
    callback(comments);
  }, 1000);
}

fetchUser((user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0], (comments) => {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

console.log("Program finished (but async tasks still running)");
