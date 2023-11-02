import styled from "styled-components";

const FactCategory = styled.span`
  ${(props) =>
    props.category === "FINANCE" &&
    `
      background-color: var(--red);
      border-radius:30px;
     padding:6px 10px;
     font-size: 1.6rem;
    `}
  ${(props) =>
    props.category === "TECHNOLOGY" &&
    `
      background-color: var(--blue);
      border-radius:30px;
     padding:6px 10px;
     font-size: 1.6rem;
    `}
  ${(props) =>
    props.category === "HISTORY" &&
    `
      background-color: var(--orange);
      border-radius:30px;
     padding:6px 10px;
     font-size: 1.6rem;
    `}
  ${(props) =>
    props.category === "SCIENCE" &&
    `
      background-color: var(--green);
      border-radius:30px;
     padding:6px 10px;
     font-size: 1.6rem;
    `}
  ${(props) =>
    props.category === "ENTERTAINMENT" &&
    `
      background-color: var(--pink);
      border-radius:30px;
     padding:6px 10px;
     font-size: 1.6rem;
    `}
`;

export default FactCategory;

{
  /* <FactCategory category="FINANCE">Sociaty</FactCategory>
<FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
<FactCategory category="ENTERTAINMENT">Sociaty</FactCategory> */
}
