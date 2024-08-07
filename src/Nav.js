import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <div className=" flex flex-col bg-gray-700 py-2 px-2">
      <form onSubmit={(e) => e.preventDefault()} className="">
        <input
          className=" border border-gray-500 focus:outline-none p-1 w-1/3"
          type="text"
          name="search"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className=" flex flex-grow text-white gap-4 mt-2">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
