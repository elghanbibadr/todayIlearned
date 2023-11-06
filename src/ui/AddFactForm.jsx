import styled from "styled-components";
import Button from "./Button";
import { useForm } from "react-hook-form";
import supabase from "../services/supabase";
import Select from "./Select";
import { categories } from "../util/helpers";

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

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const AddFactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (newFactData) => {
    const { data, error } = await supabase
      .from("facts")
      .insert([{ id: "99", ...newFactData }])
      .select();

    if (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        <Input
          type="text"
          id="factText"
          placeholder="Share a fact with the world"
          name="factText"
          {...register("factText")}
        />
        <span>200</span>
      </Flex>
      <Input
        type="text"
        placeholder="trustworhty source"
        id="factSource"
        name="factSource"
        {...register("factSource")}
      />

      <Select id="category" name="category" {...register("category")}>
        <option value="">Choose category:</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </Select>

      <Button text="SHAREFACT">POST</Button>
    </Form>
  );
};
export default AddFactForm;
