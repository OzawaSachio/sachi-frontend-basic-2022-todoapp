import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

const AddTaskButton = (props) => {
  return (
    <StyledAddTaskButton onClick={props.onClick}>
      <img src={plus} />
      <StyledAddTaskText>タスクを追加</StyledAddTaskText>
      <Shadow></Shadow>
    </StyledAddTaskButton>
  );
};
export default AddTaskButton;

const StyledAddTaskButton = styled.button`
  position: relative;
  display: flex;
  column-gap: 10px;
  background: transparent;
  border: none;
  padding: 2px 6px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

const StyledAddTaskText = styled.div`
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${COLOR.GREEN};
  opacity: 0;
  border-radius: 12px;
  &:hover {
    opacity: 0.2;
  }
`;
