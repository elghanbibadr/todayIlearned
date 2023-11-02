import styled from "styled-components";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
const H1 = styled.h1`
  font-size: 2.8rem;
`;
const Header = () => {
  return (
    <div>
      <div>
        <Logo />
        <H1>TODAY I LEARNED</H1>
      </div>
      <Button text="SHAREFACT">SCIENCE</Button>
    </div>
  );
};

export default Header;
