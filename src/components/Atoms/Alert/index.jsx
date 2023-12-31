import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ visible, errorText }) => {
  return (
    <AlertWrapper isActive={visible}>
      <AlertText> {errorText} </AlertText>
    </AlertWrapper>
  );
};

const AlertText = styled.div`
  color: ${COLOR.WHITE};
  font-size: ${TEXT.S};
  width: 100%;
  flex-basis: 400px;
  padding: 10px 20px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
`;

const AlertWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 80px;
  left: 50%;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  opacity: 0;
  ${(props) =>
    props.isActive && `opacity: 1; transform: translateX(-50%) translateY(0%)`};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 0px 20px;
    top: 40px;
  }
`;

export default Alert;
