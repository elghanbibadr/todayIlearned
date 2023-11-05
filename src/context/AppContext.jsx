import { createContext, useState } from "react";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [facts, setFacts] = useState([]);
  const [filteredFacts, setFilteredFacts] = useState(facts);

  const value = {
    facts,
    setFacts,
    filteredFacts,
    setFilteredFacts,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
