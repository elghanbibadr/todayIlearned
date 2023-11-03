import styled from "styled-components";

const AppLayout = styled.div`
  @media (min-width: 786px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    padding: 30px;
  }
`;

export default AppLayout;
