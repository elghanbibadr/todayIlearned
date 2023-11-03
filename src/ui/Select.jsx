import styled from "styled-components";

const Select = styled.div`
  position: relative;
  display: inline-block;
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .custom-options {
    display: ${(props) => (props["data-isopen"] ? "block" : "none")};
    position: absolute;
    background-color: black;
    color: white;
    top: 100%;
    left: 0;
    right: 0;
    border-radius: 5px;
  }

  .custom-option {
    padding: 10px;
    cursor: pointer;
  }
`;

export default Select;
