import styled from "styled-components";

const Button = styled.button`
  color: var(--darkWhite);
  padding: 6px 40px;
  font-size: 1.8rem;
  margin-block: 10px;
  border-radius: 30px;
  border: none;
  transition: transform 0.3s; /* Add a transition for smooth scaling */

  &:hover {
    transform: scale(1.1) rotate(-1deg); /* Scale by 10% and rotate by -5 degrees when hovering */
  }

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
  ${(props) =>
    props.text === "SOCIETY" &&
    `
    background-color: var(--yellow);
  `};
  ${(props) =>
    props.text === "HEALTH" &&
    `
    background-color: var(--cyan);
  `};
  ${(props) =>
    props.text === "NEWS" &&
    `
    background-color: var(--purple);
  `};
`;

export default Button;
