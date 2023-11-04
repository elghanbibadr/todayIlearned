import Row from "../ui/Row";
import styled from "styled-components";
import { useQuery } from "react-query";
import Card from "../ui/Card";
import FactVoteBtn from "../ui/FactVoteBtn";
import FactCategory from "../ui/FactCategory";
import getFacts from "../services/apiFacts";
import { isAuthApiError } from "@supabase/supabase-js";

const P = styled.p`
  font-family: "Sono", monospace;
  @media (min-width: 886px) {
    width: 50%;
    margin-left: 20px;
  }
`;

const Main = () => {
  const {
    isLoading,
    data: facts,
    error,
  } = useQuery({
    queryKey: ["facts"],
    queryFn: getFacts,
  });

  if (isLoading) return <p>loading ...</p>;
  console.log(facts);

  return (
    <Main>
      {facts.map(({ id, category, disputed, downvote, factText, upvote }) => (
        <Card key={id}>
          <P>{factText}</P>
          <FactCategory category={category}>{category}</FactCategory>
          <Row type="horizontal" position="end">
            <FactVoteBtn>👍 {upvote}</FactVoteBtn>
            <FactVoteBtn>⛔️ {disputed}</FactVoteBtn>
            <FactVoteBtn>🤯 {downvote}</FactVoteBtn>
          </Row>
        </Card>
      ))}
    </Main>
  );
};

export default Main;
