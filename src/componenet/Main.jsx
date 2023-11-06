import { useEffect, useState } from "react";
import FactCard from "../ui/FactCard";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useQuery } from "react-query";

import getFacts from "../services/apiFacts";

const Main = () => {
  const { facts, setFacts, filteredFacts, setFilteredFacts } =
    useContext(AppContext);

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
  }, [queryData, isLoading]);

  if (isLoading) return <p>loading ...</p>;
  if (error) return <p>error ...</p>;

  return (
    <main>
      {facts.length > 0 &&
        filteredFacts.map(({ id, ...factProps }) => (
          <FactCard key={id} id={id} {...factProps} />
        ))}
    </main>
  );
};

export default Main;
