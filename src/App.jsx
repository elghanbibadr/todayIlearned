import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Card from "./ui/Card";
import FactVoteBtn from "./ui/FactVoteBtn";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <h1>hello</h1>
      <Card>
        <p>hello this is a card</p>
      </Card>
      <FactVoteBtn> 👍 10</FactVoteBtn>
      <FactVoteBtn>⛔️ 10</FactVoteBtn>
      <FactVoteBtn>🤯 10</FactVoteBtn>
    </div>
  );
};

export default App;
