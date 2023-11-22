import React, { createContext, useState, useContext, useEffect } from "react";

const appContext = createContext({
  show: null,
  setShow: () => {},
  seen: null,
  setSeen: () => {},
});

const AuthProvider = ({ children }) => {
  const [show, setShow] = useState(5);
  const [seen, setSeen] = useState("seen");

  // console.log("inside authProvider");

  // useEffect(() => {
  //   console.log("inside authProvider useEffect");
  //   setShow(25);
  // }, []);

  return (
    <appContext.Provider value={{ show, setShow, seen, setSeen }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(appContext);
};

export default AuthProvider;
