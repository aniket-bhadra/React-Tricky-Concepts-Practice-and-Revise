import React from "react";

import { useAppState } from "./conext/Auth";

const Loader2 = () => {
  console.log("inside Loader2");
  const { show } = useAppState();
  return <div>{show}</div>;
};

export default Loader2;
