const MainContent = (props) => {
  return (
    <main className="bg-gray-300 rounded-b-lg ">
      {props.posts.length == 0 ? (
        <p id="empty-post">No posts available</p>
      ) : (
        props.posts.map((post) => (
          <article className="post" key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </article>
        ))
      )}
    </main>
  );
};

export default MainContent;
