/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useState } from "react";
import utils from "../../utils";
import NumberInput from "./Input/NumberInput";

const Wrapper = styled.div`
	width: 75%;
  display: flex;
  flex-flow: column wrap;
  background-color: #393939;
  padding: 1rem;
`;

const InputWrapper = styled.div`
	width: 15%;
	height: 7.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
	background-color: hsla(0, 0%, 100%, 0.1);
  padding: 0 0.5rem;
	/* margin: 1rem; */
`;

const Container = styled.div`
  width: ${(props) => props.w || "100px"};
  height: ${(props) => props.h || "100px"};
  background-color: #161616;
  border: 0.25rem #262626 solid inset;
  margin-bottom: 1rem;
`;

function Window(props) {
  const { initialWidth, initialHeight, minWidth, maxWidth, minHeight, maxHeight } = props;

  const [width, setWidth] = useState(props.initialWidth);
  const [height, setHeight] = useState(props.initialHeight);

  function handleWidthChange(event) {
    setWidth(event.target.value);
  }

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  return (
    <Wrapper>
      <Container
        w={utils.toPixels(width)}
        h={utils.toPixels(height)}
      ></Container>
      <InputWrapper>
        <NumberInput
          label={"Width"}
          value={width}
          onChange={handleWidthChange}
          range={{ min: minWidth, max: maxWidth }}
          step={10}
        />
        <NumberInput
          label={"Height"}
          value={height}
          onChange={handleHeightChange}
          range={{ min: minHeight, max: maxHeight }}
          step={10}
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default Window;
