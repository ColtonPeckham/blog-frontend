export function PostsIndex(props) {
  return (
    <div>
      <h1>Da Blogs</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <img src={post.url}/>
          <body>{post.body}</body>
          </div>
        ))}
    </div>
  );
}