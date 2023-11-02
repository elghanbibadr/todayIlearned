import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Card from "./ui/Card";
import Row from "./ui/Row";
import FactVoteBtn from "./ui/FactVoteBtn";
import FactCategory from "./ui/FactCategory";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <h1>hello</h1>
      <Card>
        <Row>
          <p>The less money you spend, the more you save!(Source)</p>
          <FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
          <Row type="horizontal" position="end">
            <FactVoteBtn> 👍 10</FactVoteBtn>
            <FactVoteBtn>⛔️ 10</FactVoteBtn>
            <FactVoteBtn>🤯 10</FactVoteBtn>
          </Row>
        </Row>
      </Card>
    </div>
  );
};

export default App;
