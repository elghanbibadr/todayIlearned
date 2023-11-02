import logo from "../../public/logo.png";
import styled from "styled-components";
const Img = styled.img`
  height: 70px;
`;
const Logo = () => {
  return <Img src={logo} alt="logo" />;
};

export default Logo;
