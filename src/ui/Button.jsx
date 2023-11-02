import styled from "styled-components";
{
  /* <Button text="SCIENCE">SCIENCE</Button> */
}

const Button = styled.button`
  color: var(--darkWhite);
  border-radius: 30px;
  padding: 6px 40px;
  font-size: 1.8rem;
  margin-block: 10px;
  border: none;
  ${(props) =>
    (props.text === "ALL" || props.text === "SHAREFACT") &&
    `
    background:linear-gradient(135deg,#3b82f6,#ef4444,#16a34a,#eab308);
  `}
  ${(props) =>
    props.text === "FINANCE" &&
    `
    background-color: var(--red);
  `}
  ${(props) =>
    props.text === "TECHNOLOGY" &&
    `
    background-color: var(--blue);
  `}
  ${(props) =>
    props.text === "HISTORY" &&
    `
    background-color: var(--orange);
  `}
  ${(props) =>
    props.text === "SCIENCE" &&
    `
    background-color: var(--green);
  `}
  ${(props) =>
    props.text === "ENTERTAINMENT" &&
    `
    background-color: var(--pink);
  `};
`;

export default Button;
