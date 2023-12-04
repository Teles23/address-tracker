import { useState } from "react";
import Arrow from "../../assets/icon-arrow.svg";
import { ArrowIcon, InputField, StyledInput } from "./styledInput";
import api from "../../services/api";
const CustomInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      try {
        const response = await api.get("", {
          params: {
            ipAddress: trimmedValue,
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <StyledInput>
      <InputField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ArrowIcon onClick={handleSubmit}>
        <img src={Arrow} alt="arrow" />
      </ArrowIcon>
    </StyledInput>
  );
};

export default CustomInput;
