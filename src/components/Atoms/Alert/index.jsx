import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ visible, errorText }) => {
  return <AlertText isActive={visible}> {errorText} </AlertText>;
};

const AlertText = styled.div`
  color: ${COLOR.WHITE};
  font-size: ${TEXT.S};
  position: absolute;
  top: 80px;
  left: 50%;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  opacity: 0;
  ${(props) =>
    props.isActive && `opacity: 1; transform: translateX(-50%) translateY(0%)`};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    left: 20px;
    right: 20px;
  }
`;

export default Alert;
