import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Card from "./ui/Card";
import Header from "./componenet/Header";
import SideBar from "./ui/SideBar";
import Row from "./ui/Row";
import FactVoteBtn from "./ui/FactVoteBtn";
import FactCategory from "./ui/FactCategory";
import AppLayout from "./ui/AppLayout";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Header />
        <SideBar />
        <main>
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
          <Card>
            <Row>
              <p>
                The shortest war in history lasted 38 minutes! It was between
                Britain and Zanzibar on August 27, 1896. It was over the
                ascension of the next Sultan in Zanzibar and resulted in a
                British victory.(Source)
              </p>
              <FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
              <Row type="horizontal" position="end">
                <FactVoteBtn> 👍 10</FactVoteBtn>
                <FactVoteBtn>⛔️ 10</FactVoteBtn>
                <FactVoteBtn>🤯 10</FactVoteBtn>
              </Row>
            </Row>
          </Card>
          <Card>
            <Row>
              <p>
                As of 2023, Breaking Bad is the highest-rated TV show on IMDb
                with a
              </p>
              <FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
              <Row type="horizontal" position="end">
                <FactVoteBtn> 👍 10</FactVoteBtn>
                <FactVoteBtn>⛔️ 10</FactVoteBtn>
                <FactVoteBtn>🤯 10</FactVoteBtn>
              </Row>
            </Row>
          </Card>
          <Card>
            <Row>
              <p>
                There is enough DNA in the average person’s body to stretch from
                the sun to Pluto and back — 17 times
              </p>
              <FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
              <Row type="horizontal" position="end">
                <FactVoteBtn> 👍 10</FactVoteBtn>
                <FactVoteBtn>⛔️ 10</FactVoteBtn>
                <FactVoteBtn>🤯 10</FactVoteBtn>
              </Row>
            </Row>
          </Card>
        </main>
      </AppLayout>
    </>
  );
};

export default App;
