import styled from "styled-components";
import Button from "./Button";
import Select from "./Select";
const Input = styled.input`
  background-color: #78716c;
  color: white;
  border-radius: 30px;
  margin-inline: 10px;
  width: 300px;
  max-width: 300px;
  font-size: 1.3rem;
  font-weight: 300;
  font-family: "Sono", monospace;
  padding: 10px 20px;
  padding-block: 13px;
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
        <Input type="text" placeholder="Share a fact with the world" />
        <span>200</span>
      </div>
      <Input type="text" placeholder="trustworhty source" />
      <Select />
      <Button text="SHAREFACT">POST</Button>
    </Form>
  );
};
export default AddFactForm;
