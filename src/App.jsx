import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Card from "./ui/Card";
const App = () => {
  return (
    <div>
      <GlobalStyles />
      <h1>hello</h1>
      <Card>
        <p>hello this is a card</p>
      </Card>
      <Button text="ALL">SCIENCE</Button>
      <Button text="SHAREFACT">SCIENCE</Button>
    </div>
  );
};

export default App;
