import styled from "styled-components";
import { useId } from "react";

const InputWrapper = styled.div`
  background-color: #262626;
  padding: 0.5rem;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
	height: 45%;
`;

const StyledLabel = styled.label`
  color: hsl(0, 0%, 90%);

  align-items: center;
  text-align: center;
  align-self: center;

  width: 50%;
`;

const StyledInput = styled.input`
  background-color: hsl(0, 0%, 32.15%);
  color: hsl(0, 0%, 90%);

	text-decoration: none;

  border: none;
  box-shadow: none;

  width: 50%;

  align-self: center;

  margin-left: 0.25rem;

  &:hover,
	&:focus {
    color: hsl(0, 0%, 100%);
		outline: none;
  }
	&:active,
	&:focus {
    background-color: hsl(0, 0%, 35%);
  }

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const NumberInput = ({
  label,
  value,
  onChange,
  range = {
    min: 0,
    max: 100,
  },
  step = 1,
  placeholder = "",
  disabled = false,
  className = "",
}) => {
  const inputId = useId();

  return (
    <InputWrapper className={`number-input ${className}`}>
      {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <StyledInput
        type="number"
        id={inputId}
        value={value}
        onChange={onChange}
        min={range.min}
        max={range.max}
        step={step}
        placeholder={placeholder}
        disabled={disabled}
        inputMode="numeric"
        className="number-input-field"
      />
    </InputWrapper>
  );
};

export default NumberInput;
