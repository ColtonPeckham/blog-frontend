export function PostsIndex(props) {
  return (
    <div>
      <h1>Da Blogs</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image}/>
          <body>{post.body}</body>
          </div>
        ))}
    </div>
  );
}