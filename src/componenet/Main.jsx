import Row from "../ui/Row";
import styled from "styled-components";
import Card from "../ui/Card";
import FactVoteBtn from "../ui/FactVoteBtn";
import FactCategory from "../ui/FactCategory";

const P = styled.p`
  font-family: "Sono", monospace;
  @media (min-width: 886px) {
    width: 50%;
    margin-left: 20px;
  }
`;

const Main = () => {
  return (
    <main>
      <Card>
        <P>The less money you spend, the more you save!(Source)</P>
        <FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
        <Row type="horizontal" position="end">
          <FactVoteBtn> 👍 10</FactVoteBtn>
          <FactVoteBtn>⛔️ 10</FactVoteBtn>
          <FactVoteBtn>🤯 10</FactVoteBtn>
        </Row>
      </Card>
    </main>
  );
};

export default Main;
