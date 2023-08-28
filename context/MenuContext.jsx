"use client";
import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [opens, setOpen] = useState(false);

  const toggle = () => {
    console.log({ opens });
    setOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ opens, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
