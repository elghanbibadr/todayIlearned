import Button from "./Button";
import styled from "styled-components";

const ASIDE = styled.aside`
  display: flex;
  flex-direction: column;
`;
const SideBar = () => {
  return (
    <ASIDE>
      <Button text="ALL">ALL</Button>
      <Button text="TECHNOLOGY">TECHNOLOGY</Button>
      <Button text="SCIENCE">SCIENCE</Button>
      <Button text="FINANCE">FINANCE</Button>
      <Button text="SOCIETY">SOCIETY</Button>
      <Button text="ENTERTAINMENT">ENTERTAINMENT</Button>
      <Button text="HEALTH">HEALTH</Button>
      <Button text="HISTORY">HISTORY</Button>
      <Button text="NEWS">NEWS</Button>
    </ASIDE>
  );
};

export default SideBar;
