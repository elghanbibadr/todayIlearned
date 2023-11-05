import { createContext, useState } from "react";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [facts, setFacts] = useState([]);

  const value = {
    facts,
    setFacts,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
