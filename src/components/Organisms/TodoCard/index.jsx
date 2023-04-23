import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";
import Task from "../../Molecules/Task";
import { startTransition } from "react";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([
    { name: "a", initializing: false },
    { name: "b", initializing: false },
    { name: "c", initializing: false },
  ]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const taskElements = taskList.map((task, index) => {
    return (
      <Task
        key={index}
        taskName={task.name}
        onTaskComplete={() => onTaskComplete(index)}
        onTaskChange={(value) => onTaskNameChange(index, value)}
        defaultIsEditing={task.initializing}
      />
    );
  });

  const onTaskComplete = (index) => {
    setTaskList((current) => current.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (index, taskName) => {
    setTaskList((current) =>
      current.map((task, i) =>
        i === index ? { name: taskName, initializing: false } : task
      )
    );
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>{taskElements}</StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div``;

const StyledTaskList = styled.div``;
