import Button from "./Button";
import styled from "styled-components";

const ASIDE = styled.aside`
  display: flex;
  flex-direction: column;
`;

const buttonLabels = [
  "ALL",
  "TECHNOLOGY",
  "SCIENCE",
  "FINANCE",
  "SOCIETY",
  "ENTERTAINMENT",
  "HEALTH",
  "HISTORY",
  "NEWS",
];

const SideBar = () => {
  return (
    <ASIDE>
      {buttonLabels.map((label, index) => (
        <Button key={index} text={label}>
          {label}
        </Button>
      ))}
    </ASIDE>
  );
};

export default SideBar;
