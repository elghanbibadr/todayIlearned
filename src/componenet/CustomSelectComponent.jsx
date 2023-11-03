import Select from "../ui/Select";
import { useState } from "react";
export const CustomSelectComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Select data-isopen={isOpen}>
      {selectedOption}
      <div className="custom-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="custom-option"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </Select>
  );
};
