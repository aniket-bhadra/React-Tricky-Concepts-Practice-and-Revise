import React, { useState } from "react";

import Loader from "./Loader";

const TestingRerendering = () => {
  const [show, setShow] = useState(null);
  return (
    <div>
      TestingRerendering
      <Loader />
    </div>
  );
};

export default TestingRerendering;
