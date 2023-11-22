import React from "react";

const Loader = ({ loader }) => {
  console.log("hello from loader");
  return <div>{loader && <div>this is Loader......</div>} </div>;
};

export default Loader;
