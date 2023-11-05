import styled from "styled-components";

const FactCategory = styled.span`
  align-self: end;
  border-radius: 30px;
  padding: 6px 10px;
  font-size: 1.6rem;

  @media (min-width: 786px) {
    align-self: center;
  }

  ${(props) =>
    props.category.includes("FINANCE") &&
    `
      background-color: var(--red);
    
    `}
  ${(props) =>
    props.category === "TECHNOLOGY" &&
    `
      background-color: var(--blue);
    
    `}
    ${(props) =>
    props.category === "HISTORY" &&
    `
      background-color: var(--orange);
    
    `}
    ${(props) =>
    props.category === "SCIENCE" &&
    `
      background-color: var(--green);
    
    `}
    ${(props) =>
    props.category === "ENTERTAINMENT" &&
    `
      background-color: var(--yellow);
    
    `};
  ${(props) =>
    props.category === "SOCIETY" &&
    `
      background-color: var(--yellow) !important;
    
    `};
`;

export default FactCategory;

{
  /* <FactCategory category="FINANCE">Sociaty</FactCategory>
<FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
<FactCategory category="ENTERTAINMENT">Sociaty</FactCategory> */
}
