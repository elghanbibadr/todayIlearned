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
  downvote: currentDownVote,
  disputed: currentDispute,
}) => {
  const [upvote, setUpvote] = useState(currentUpvote);
  const [downVote, setDownVote] = useState(currentDownVote);
  const [dispute, setDispute] = useState(currentDispute);

  const [selectedVote, setSelectedVote] = useState("");

  const upvoteHandler = () => {
    setSelectedVote((prevSelectedVote) =>
      prevSelectedVote === "upvote" ? "" : "upvote"
    );

    setUpvote((prevUpvote) =>
      selectedVote === "upvote" ? prevUpvote - 1 : prevUpvote + 1
    );
  };

  const disputeHandler = () => {
    setSelectedVote((prevSelectedVote) =>
      prevSelectedVote === "disputed" ? "" : "disputed"
    );
    setDispute((prevDispute) =>
      selectedVote === "disputed" ? prevDispute - 1 : prevDispute + 1
    );
  };

  const downVoteHandler = () => {
    setSelectedVote((prevSelectedVote) =>
      prevSelectedVote === "downvote" ? "" : "downvote"
    );
    setDownVote((prevDispute) =>
      selectedVote === "downvote" ? prevDispute - 1 : prevDispute + 1
    );
  };

  return (
    <Card id={id}>
      <P>{factText}</P>
      <FactCategory category={category}>{category}</FactCategory>
      <Row type="horizontal" position="end">
        <FactVoteBtn
          selected={selectedVote === "upvote"}
          onClick={upvoteHandler}
        >
          👍 {upvote}
        </FactVoteBtn>
        <FactVoteBtn
          onClick={disputeHandler}
          selected={selectedVote === "disputed"}
        >
          ⛔️ {dispute}
        </FactVoteBtn>

        <FactVoteBtn
          selected={selectedVote === "downvote"}
          onClick={downVoteHandler}
        >
          🤯 {downVote}
        </FactVoteBtn>
      </Row>
    </Card>
  );
};

export default FactCard;
