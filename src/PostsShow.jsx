export function PostsShow(props) {
  return (
    <div id="posts-show">
        <h2>{props.post.title}</h2>
        <p>Body: {props.post.body}</p>
        <p>Image: {props.post.image}</p>
    </div>
  )
}