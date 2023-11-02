import React from "react";
import logo from "../../public/logo.png";
// import Row from "./Row";
import styled from "styled-components";
import Button from "./Button";

const H1 = styled.h1`
  font-size: 2.8rem;
`;
const AppLayout = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <H1>TODAY I LEARNED</H1>
      </div>
      <Button text="SHAREFACT">SCIENCE</Button>
    </div>
  );
};

export default AppLayout;
