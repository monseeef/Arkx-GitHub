import { useState } from "react";

const MainContent = ({ posts, onAddPost, onEditPost, onDeletePost }) => {
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", description: "" });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = () => {
    onEditPost(editingPost.id, editingPost.title, editingPost.description);
    setEditingPost(null); // Reset editing post
  };

  const submitNewPost = (e) => {
    e.preventDefault();
    onAddPost(newPost.title, newPost.description);
    setNewPost({ title: "", description: "" }); // Reset new post form
  };

  return (
    <main>
      <form onSubmit={submitNewPost}>
        <input
          type="text"
          value={newPost.title}
          onChange={handleNewPostChange}
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          value={newPost.description}
          onChange={handleNewPostChange}
          name="description"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Add Post</button>
      </form>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <article className="post" key={post.id}>
            {editingPost?.id === post.id ? (
              <>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={handleEditChange}
                  name="title"
                  required
                />
                <textarea
                  value={editingPost.description}
                  onChange={handleEditChange}
                  name="description"
                  required
                ></textarea>
                <button onClick={submitEdit}>Save</button>
              </>
            ) : (
              <>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button onClick={() => setEditingPost(post)}>Edit</button>
                <button onClick={() => onDeletePost(post.id)}>Delete</button>
              </>
            )}
          </article>
        ))
      )}
    </main>
  );
};

export default MainContent;
