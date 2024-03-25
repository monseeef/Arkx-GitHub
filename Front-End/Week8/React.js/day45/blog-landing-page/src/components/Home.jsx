import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([
    { title: "First Post", description: "This is the first post." },
    { title: "Second Post", description: "This is the second post." },
    { title: "Third Post", description: "This is the third post." },
    { title: "Fourth Post", description: "This is the fourth post." },
    { title: "Fifth Post", description: "This is the fifth post." },
  ]);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
