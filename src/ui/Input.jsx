import styled from "styled-components";
import Button from "./Button";
const Input = styled.input`
  background-color: #78716c;
  color: white;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: 300;
  font-family: "Sono", monospace;
  padding: 10px;
  border: none;
  ::placeholder {
    color: white !important;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-gray);
  border-radius: 10px;
  grid-column: span 2;
  padding: 20px;
`;
const AddFactForm = () => {
  return (
    <Form>
      <div>
        <Input type="text" placeholder="hello" />
        <span>200</span>
      </div>
      <Input type="text" placeholder="hello" />
      <Button text="SHAREFACT">POST</Button>
    </Form>
  );
};
export default AddFactForm;
