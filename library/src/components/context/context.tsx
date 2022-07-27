import React, { createContext, FC, useContext } from "react";

interface ContextProps {
  value: VoidFunction;
}

const context = createContext<() => void>(() => console.error("default"));
export const useContextContext = () => useContext(context);

export const Context: FC<ContextProps> = ({ value, children }) => {
  return <context.Provider value={value}>{children}</context.Provider>;
};
