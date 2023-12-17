import React, { useEffect } from "react";
import styled from "styled-components";

const Alert = ({ visible, errortext }) => {
  useEffect(() => {
    console.log("visible", visible);
    console.log("errorText", errortext);
  }, [errortext]);
  return <AlertText isActive={visible}> {errortext} </AlertText>;
};

const AlertText = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;

export default Alert;
