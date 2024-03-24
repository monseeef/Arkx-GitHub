import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Awl Post 1",
      description: "This is a sample description 1",
    },
    {
      id: 2,
      title: "Salam Post 2",
      description: "This is a sample description Updated 36.",
    },
  ]);

  // New state for managing user authentication
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === mockUser.email && password === mockUser.password) {
      console.log("Logging in with:", email);
      setUser({ email });
    } else {
      console.error("Invalid credentials");
    }
  };

  const handleSignUp = (email, password) => {
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addPost = (title, description) => {
    const newPost = { id: Date.now(), title, description };
    setPosts([...posts, newPost]);
  };

  const editPost = (id, newTitle, newDescription) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, title: newTitle, description: newDescription }
        : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <Header backgroundColor="black" links={[]} />
      <MainContent
        posts={posts}
        onAddPost={addPost}
        onEditPost={editPost}
        onDeletePost={deletePost}
      />
      <div>
        {!user ? (
          <>
            <Login onLogin={handleLogin} />
            <Signup onSignUp={handleSignUp} />
          </>
        ) : (
          <>
            <div>Welcome, {user.email} !</div>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
