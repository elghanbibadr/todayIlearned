import Row from "../ui/Row";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import { useContext } from "react";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "../ui/Card";
import FactVoteBtn from "../ui/FactVoteBtn";
import FactCategory from "../ui/FactCategory";
import getFacts from "../services/apiFacts";

const P = styled.p`
  font-family: "Sono", monospace;
  @media (min-width: 886px) {
    width: 50%;
    margin-left: 20px;
  }
`;

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
        filteredFacts.map(
          ({ id, category, disputed, downvote, factText, upvote }) => (
            <Card key={id} id={id}>
              <P>{factText}</P>
              <FactCategory category={category}>{category}</FactCategory>
              <Row type="horizontal" position="end">
                <FactVoteBtn>👍 {upvote}</FactVoteBtn>
                <FactVoteBtn>⛔️ {disputed}</FactVoteBtn>

                <FactVoteBtn>🤯 {downvote}</FactVoteBtn>
              </Row>
            </Card>
          )
        )}
    </main>
  );
};

export default Main;
