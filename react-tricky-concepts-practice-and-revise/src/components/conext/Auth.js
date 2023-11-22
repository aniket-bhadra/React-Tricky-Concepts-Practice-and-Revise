import React, { createContext, useState, useContext } from "react";

const appContext = createContext({
  show: null,
  setShow: () => {},
});

const AuthProvider = ({ children }) => {
  const [show, setShow] = useState(5);

  return (
    <appContext.Provider value={{ show, setShow }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(appContext);
};

export default AuthProvider;
