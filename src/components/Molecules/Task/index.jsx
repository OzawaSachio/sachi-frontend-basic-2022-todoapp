import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, isEditingChange] = useState(defaultIsEditing);

  const onEditComplete = (taskName) => {
    isEditingChange(false);
    onTaskChange(taskName);
  };

  const onEditButtonClick = () => {
    isEditingChange(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      <StyledNameAndButtonWrapper>
        {isEditing ? (
          <Input defaultValue={taskName} onEditComplete={onEditComplete} />
        ) : (
          <>
            <StyledTaskName>{taskName}</StyledTaskName>
            <EditButton onClick={onEditButtonClick} />
          </>
        )}
      </StyledNameAndButtonWrapper>
    </StyledWrapper>
  );
};
export default Task;

const StyledWrapper = styled.div`
  display: flex;
  height: 20px;
`;

const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const StyledTaskName = styled.div`
  width: 100%;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
`;
