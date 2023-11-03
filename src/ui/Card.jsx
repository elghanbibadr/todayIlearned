import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: var(--dark-gray);
  border-radius: 10px;
  padding: 10px;
  margin-block: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 886px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  /* Media query for screens with a width of 768px or greater */
`;

export default Card;
