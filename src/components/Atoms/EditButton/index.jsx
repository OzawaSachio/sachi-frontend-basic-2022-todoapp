import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const EditButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <img src={pencil} />
      <div></div>
    </StyledButton>
  );
};
export default EditButton;

const StyledButton = styled.button`
  position: relative;
  background-color: transparent;
  padding: 0px;
  border: none;
  img {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    opacity: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${COLOR.LIGHT_GRAY};
    cursor: pointer;
  }
  &:hover {
    div {
      opacity: 0.2;
    }
  }
`;
