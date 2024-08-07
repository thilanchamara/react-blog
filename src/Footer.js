import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <div className=" p-1 bg-blue-700">
      <h1 className=" text-xl text-center text-white ">
        copyright &copy;{date.getFullYear()}
      </h1>
    </div>
  );
};

export default Footer;
