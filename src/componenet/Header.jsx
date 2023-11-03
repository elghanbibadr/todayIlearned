import styled from "styled-components";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
const H1 = styled.h1`
  font-size: 2.8rem;
  margin-left: 20px;
`;

const Nav = styled.nav`
  @media (min-width: 786px) {
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
  return (
    <Nav>
      <LogoBox>
        <Logo />
        <H1>TODAY I LEARNED</H1>
      </LogoBox>
      <Button text="SHAREFACT">SHARE A FACT</Button>
    </Nav>
  );
};

export default Header;
