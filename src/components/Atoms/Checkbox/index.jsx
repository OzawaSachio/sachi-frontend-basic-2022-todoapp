import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = (props) => {
  return (
    <CheckIconContainer onClick={props.onClick}>
      <CheckIcon src={check} />
    </CheckIconContainer>
  );
};
export default Checkbox;

const CheckIcon = styled.img``;

const CheckIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: solid 2px ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    ${CheckIcon} {
      display: block;
    }
  }
  ${CheckIcon} {
    width: 16px;
    height: 16px;
    display: none;
  }
`;
