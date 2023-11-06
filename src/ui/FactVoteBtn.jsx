import styled from "styled-components";

const FactVoteBtn = styled.button`
  border-radius: 30px;
  border: none;
  font-size: 1.6rem;
  padding: 3px 16px;
  margin-inline: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#292524" : "#78716c")};
  transition: background 0.6s;
  white-space: nowrap;
  &:hover {
    background-color: #292524;
  }
`;

export default FactVoteBtn;
