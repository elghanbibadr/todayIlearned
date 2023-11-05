import { useContext } from "react";
import Button from "./Button";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

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
  const { facts, setFilteredFacts } = useContext(AppContext);

  const factsFilterHandler = (label) =>
    setFilteredFacts(facts.filter((fact) => fact.category.includes(label)));

  return (
    <ASIDE>
      {buttonLabels.map((label, index) => (
        <Button
          onClick={() => factsFilterHandler(label)}
          key={index}
          text={label}
        >
          {label}
        </Button>
      ))}
    </ASIDE>
  );
};

export default SideBar;
