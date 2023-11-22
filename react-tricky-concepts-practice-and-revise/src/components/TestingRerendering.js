import React, { useState } from "react";

import Loader from "./Loader";

const TestingRerendering = () => {
  const [show, setShow] = useState(null);
  const [seen, setSeen] = useState(null);
  console.log("TestingRerendering compoenent");
  console.log("show state varible value is ", show);
  return (
    <div>
      <button onClick={() => setShow((prevState) => !prevState)}>
        TestingRerendering
      </button>
      <Loader loader={show} />
      <button onClick={() => setSeen((prevState) => !prevState)}>seen</button>
    </div>
  );
};

export default TestingRerendering;
