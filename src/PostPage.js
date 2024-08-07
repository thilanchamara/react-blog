import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "./api/post";

const PostPage = ({ posts, setPosts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const updatePosts = posts.filter((post) => post.id !== id);
      setPosts(updatePosts);
      navigate("/home");
    } catch (err) {
      console.log(`Error message: ${err.message}`);
    }
  };
  return (
    <div className=" flex-grow px-1">
      {post && (
        <article className=" mt-3">
          <h2 className=" text-2xl font-bold ">{post.title}</h2>
          <p className=" mt-1 mb-3">{post.datetime}</p>
          <p>{post.body}</p>

          <button
            onClick={() => handleDelete(post.id)}
            className=" bg-cyan-400 px-2 py-1 rounded text-white mt-4 cursor-pointer"
          >
            Delete
          </button>
        </article>
      )}
      {!post && (
        <div>
          <h2 className=" text-2xl font-bold ">Post not found</h2>
          <Link to={"/home"} className=" underline">
            Visit our home page
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostPage;
