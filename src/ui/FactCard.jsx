import Card from "./Card";
import FactVoteBtn from "./FactVoteBtn";
import styled from "styled-components";
import FactCategory from "./FactCategory";
import Row from "./Row";
import { useState } from "react";

const P = styled.p`
  font-family: "Sono", monospace;
  @media (min-width: 886px) {
    width: 50%;
    margin-left: 20px;
  }
`;
const FactCard = ({
  id,
  factText,
  category,
  upvote: currentUpvote,
  downvote,
  disputed,
}) => {
  const [upvote, setUpvote] = useState(currentUpvote);
  const [selectedVote, setSelectedVote] = useState("");
  return (
    <Card id={id}>
      <P>{factText}</P>
      <FactCategory category={category}>{category}</FactCategory>
      <Row type="horizontal" position="end">
        <FactVoteBtn
          selected={selectedVote === "upvote"}
          onClick={() => setSelectedVote("upvote")}
        >
          👍 {upvote}
        </FactVoteBtn>
        <FactVoteBtn
          onClick={() => setSelectedVote("disputed")}
          selected={selectedVote === "disputed"}
        >
          ⛔️ {disputed}
        </FactVoteBtn>

        <FactVoteBtn
          selected={selectedVote === "downvote"}
          onClick={() => setSelectedVote("downvote")}
        >
          🤯 {downvote}
        </FactVoteBtn>
      </Row>
    </Card>
  );
};

export default FactCard;
