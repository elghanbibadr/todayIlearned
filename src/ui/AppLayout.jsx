import styled from "styled-components";

const AppLayout = styled.div`
  max-width: 130rem;
  margin-inline: auto;
  @media (min-width: 886px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    padding: 30px;
  }
`;

export default AppLayout;
