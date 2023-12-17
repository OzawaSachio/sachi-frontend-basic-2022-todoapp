import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ defaultValue = "", onEditComplete }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener(
      "blur",
      () => {
        if (inputRef.current === null) {
          return;
        }
        onEditComplete(inputRef.current.value);
      },
      []
    );
    inputRef.current.addEventListener(
      "keypress",
      (e) => {
        if (e.code === "Enter") {
          onEditComplete(inputRef.current.value);
        }
      },
      []
    );
  }, []);

  return <InputText ref={inputRef} />;
};
export default Input;

const InputText = styled.input`
  width: 100%;
  height: 20px;
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  border: none;
  outline: none;
  ${TEXT.S}
  padding: 0px 4px;
`;
