import React from "react";

import { useAppState } from "./conext/Auth";

const Loader2 = () => {
  console.log("inside Loader2");
  useAppState();
  //   console.log("the value of show-- ", show);
  return <div>loader......</div>;
};

export default Loader2;
