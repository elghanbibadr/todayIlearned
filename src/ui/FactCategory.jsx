import styled from "styled-components";

const FactCategory = styled.span`
  align-self: end;
  border-radius: 30px;
  padding: 6px 10px;
  font-size: 1.6rem;
  margin-block: 10px;
  @media (min-width: 886px) {
    align-self: center;
  }

  ${(props) =>
    props.category.toUpperCase().includes("FINANCE") &&
    `
      background-color: var(--red);
    
    `}
  ${(props) =>
    props.category.toUpperCase().includes("TECHNOLOGY") &&
    `
      background-color: var(--blue);
    
    `}
    ${(props) =>
    props.category.toUpperCase().includes("HISTORY") &&
    `
      background-color: var(--orange);
    
    `}
    ${(props) =>
    props.category.toUpperCase().includes("SCIENCE") &&
    `
      background-color: var(--green);
    
    `}
    ${(props) =>
    props.category.toUpperCase().includes("ENTERTAINMENT") &&
    `
      background-color: var(--yellow);
    
    `};
  ${(props) =>
    props.category.toUpperCase().includes("SOCIETY") &&
    `
      background-color: var(--yellow) ;
    
    `};
  ${(props) =>
    props.category.toUpperCase().includes("NEWS") &&
    `
      background-color: var(--purple) ;
    
    `};
  ${(props) =>
    props.category.toUpperCase().includes("HEALTH") &&
    `
      background-color: var(--cyan) ;
    
    `};
`;

export default FactCategory;
