import styled from "styled-components";
import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import AddFactForm from "../ui/Input";
import Logo from "../ui/Logo";
const H1 = styled.h1`
  font-size: 2.8rem;
  margin-left: 20px;
`;

const Nav = styled.nav`
  @media (min-width: 886px) {
    grid-column: span 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [shareNewFactBtnClicked, setNewFactBtnClicked] = useState(false);
  return (
    <>
      <Nav>
        <LogoBox>
          <Logo />
          <H1>TODAY I LEARNED</H1>
        </LogoBox>
        {!shareNewFactBtnClicked && (
          <Button onClick={() => setNewFactBtnClicked(true)} text="SHAREFACT">
            SHARE A FACT
          </Button>
        )}
        {shareNewFactBtnClicked && (
          <Button onClick={() => setNewFactBtnClicked(false)} text="SHAREFACT">
            CLOSE
          </Button>
        )}
      </Nav>
      {shareNewFactBtnClicked && <AddFactForm />}
    </>
  );
};

export default Header;
