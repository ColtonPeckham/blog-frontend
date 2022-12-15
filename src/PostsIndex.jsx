export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">

      
      
      <h1>Da Blogs</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image}/>
          <body>{post.body}</body>
          <button className="btn btn-info" onClick={ () => props.onSelectPost(post) }>MORE INFO</button>
        </div>
      ))}

      <div className="card-group">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

            {props.posts.map((post) => (
              <div key={post.id} className="posts">
                <h2>{post.title}</h2>
                <h4>{post.body}</h4>
                <img src={post.image_url} alt="" />
                <button className="btn btn-info" onClick={ () => props.onSelectPost(post) }>MORE INFO</button>
              </div>
            ))}
      </div>
    </div>
  );
}