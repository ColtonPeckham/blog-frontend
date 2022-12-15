import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew"
import { Signup } from "./Signup";
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Home() {
const [posts, setPosts] = useState([]);
const [isPostsShowVisible, setIsPostShowVisible] = useState(false)
const [currentPost, setCurrentPost] = useState({});

const handleIndexPosts = () => {
  console.log("handleIndexPosts");
  axios.get("http://localhost:3000/posts.json").then((response) => {
    console.log(response.data);
    setPosts(response.data);
  });
};
 
const handleShowPost = (post) => {
  setIsRecipesShowVisible(true);
  setCurrentRecipe(post);
}

const handleHidePost = () => {
  setIsPostsShowVisible(false);
}

const handleCreatePost = (params) => {
  axios.post("http://localhost:3000/posts.json", params).then((response) => {
    setPosts([...posts, response.data])
  });
}
  useEffect(handleIndexPosts, []);
  
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}/>
        <PostsShow post={currentPost}/>

      <Modal/>

      <PostsNew onPostCreate={handleCreatePost} />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  )
}