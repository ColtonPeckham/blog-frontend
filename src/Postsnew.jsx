import axios from "axios";

export function PostsNew(props) {
}
const handleCreatePost = (params) => {
  axios.post("http://localhost:3000/posts.json", params).then((response) => {
    setPosts([...posts, response.data])
  });
}

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("bloggin!");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      });
  }

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}