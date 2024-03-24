import  { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
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
      <Footer />
    </>
  );
}

export default App;
