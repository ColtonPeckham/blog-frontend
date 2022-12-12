import { PostsIndex } from "./PostsIndex";

export function Home() {
  const posts = [
    {id: 1, name: "test1", body: "here is a little body", url: "http://via.placeholder.com/150"},
    {id: 2, name: "test2", body: "here is a bigger body", url: "http://via.placeholder.com/300"}
  ]
  
  
  return (
    <div>
      <PostsIndex posts={posts}/>
    </div>
  )
}