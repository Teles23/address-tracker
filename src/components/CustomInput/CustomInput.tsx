import { useState } from "react";
import Arrow from "../../assets/icon-arrow.svg";
import useGlobalContext from "../../hooks/useGlobalContext";
import api from "../../services/api";
import { ArrowIcon, InputField, StyledInput } from "./styledInput";
const CustomInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { setDetails } = useGlobalContext();

  const handleSubmit = async () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      try {
        const { data } = await api.get("", {
          params: {
            ipAddress: trimmedValue,
          },
        });
        setDetails({
          ip: data.ip,
          isp: data.isp,
          location: `${data.location.region}, ${data.location.country} ${data.location.postalCode}`,
          timezone: data.location.timezone,
          lat: data.location.lat,
          lng: data.location.lng,
        });
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
