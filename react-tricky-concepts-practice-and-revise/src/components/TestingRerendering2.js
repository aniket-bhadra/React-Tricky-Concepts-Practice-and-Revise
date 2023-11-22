import React, { useState } from "react";

import Loader2 from "./Loader2";

const TestingRerendering2 = ({ children }) => {
  const [show, setShow] = useState();
  console.log("inside TestingRerendering2");
  return (
    <div>
      <button onClick={() => setShow((prevState) => !prevState)}>
        show me
      </button>
      {children}
      <Loader2 />
    </div>
  );
};

export default TestingRerendering2;
