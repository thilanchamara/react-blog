import React from "react";

const Header = ({ title }) => {
  return (
    <div className=" py-2 bg-blue-400">
      <h1 className=" text-4xl font-bold text-center">{title}</h1>
    </div>
  );
};

export default Header;
