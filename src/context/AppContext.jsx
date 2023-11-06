import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import getFacts from "../services/apiFacts";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [facts, setFacts] = useState([]);
  const [filteredFacts, setFilteredFacts] = useState(facts);
  const {
    isLoading,
    data: queryData,
    error,
  } = useQuery({
    queryKey: ["facts"],
    queryFn: getFacts,
  });

  useEffect(() => {
    // Update the local state when data is available
    if (!isLoading && queryData) {
      setFacts(queryData);
      setFilteredFacts(queryData);
    }
    console.log("queryData", queryData);
  }, [queryData, isLoading]);

  const value = {
    facts,
    setFacts,
    filteredFacts,
    setFilteredFacts,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
