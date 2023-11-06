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
    props.category.includes("TECHNOLOGY") &&
    `
      background-color: var(--blue);
    
    `}
    ${(props) =>
    props.category.includes("HISTORY") &&
    `
      background-color: var(--orange);
    
    `}
    ${(props) =>
    props.category.includes("SCIENCE") &&
    `
      background-color: var(--green);
    
    `}
    ${(props) =>
    props.category.includes("ENTERTAINMENT") &&
    `
      background-color: var(--yellow);
    
    `};
  ${(props) =>
    props.category.includes("SOCIETY") &&
    `
      background-color: var(--yellow) ;
    
    `};
  ${(props) =>
    props.category.includes("NEWS") &&
    `
      background-color: var(--purple) ;
    
    `};
  ${(props) =>
    props.category.includes("HEALTH") &&
    `
      background-color: var(--cyan) ;
    
    `};
`;

export default FactCategory;

{
  /* <FactCategory category="FINANCE">Sociaty</FactCategory>
<FactCategory category="TECHNOLOGY">Sociaty</FactCategory>
<FactCategory category="ENTERTAINMENT">Sociaty</FactCategory> */
}
