import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import api from "./api/post";

const NewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,

  posts,
  setPosts,
}) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts.length + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime: dateTime,
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      const newPosts = [...posts, response.data];
      setPosts(newPosts);

      setPostTitle("");
      setPostBody("");
      navigate("/home");
    } catch (err) {
      console.log(`Error message: ${err.message}`);
    }
  };

  return (
    <div className=" h-full">
      <form className=" flex flex-col p-1" onSubmit={handleSubmit}>
        <input
          className=" border border-gray-500 w-1/2 p-1 focus:outline-none my-4"
          type="text"
          name="title"
          placeholder="post title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          className=" border border-gray-500 w-1/2 p-1 focus:outline-none"
          name="post body"
          placeholder="Enter your post"
          rows={10}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className="bg-cyan-400 px-2 py-1 rounded text-white mt-4 cursor-pointer w-[100px] min-w-[100px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
