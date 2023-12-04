import styled from "styled-components";

const StyledInput = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  height:50px;
  border-radius: 15px;
  width: 100%;
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display:flex;
  justify-content: center;
  align-items:center;
  width: 60px;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background-color: #000;
  cursor: pointer;
`;

export { StyledInput, InputField, ArrowIcon };
