import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts = [] }) => {
  return (
    <article className="  p-2 overflow-y-auto flex-grow">
      {posts.length ? (
        posts.map(({ id, title, datetime, body }) => (
          <div className=" mb-4">
            <Link key={id} to={`/post/${id}`}>
              <h2 className=" text-2xl font-bold ">{title}</h2>
              <p className=" mt-1 mb-3">{datetime}</p>
              <p>{body.length <= 25 ? body : body.slice(0, 25) + "...."}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No any post to display</p>
      )}
    </article>
  );
};

export default Home;
