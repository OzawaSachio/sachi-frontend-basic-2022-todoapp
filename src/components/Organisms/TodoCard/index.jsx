import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

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
    if (taskName === "") {
      onTaskComplete(index);
    } else {
      setTaskList((current) =>
        current.map((task, i) =>
          i === index ? { name: taskName, initializing: false } : task
        )
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("taskData", taskList);
  }, [taskList]);

  useEffect(() => {
    localStorage.getItem("taskData");
  }, []);

  return (
    <StyledWrapper>
      <AddTaskButtonWrapper>
        <AddTaskButton onClick={onAddTaskButtonClick} />
      </AddTaskButtonWrapper>
      <StyledTaskListWrapper>
        <StyledTaskList>{taskElements}</StyledTaskList>
      </StyledTaskListWrapper>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  padding: 20px;
`;

const AddTaskButtonWrapper = styled.div`
  padding-bottom: 12px;
`;

const StyledTaskListWrapper = styled.div`
  padding-left: 6px;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
