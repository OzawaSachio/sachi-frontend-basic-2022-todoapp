import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";

const MainPage = () => {
  return (
    <>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
      <TodoCardWrapper>
        <TodoCard />
      </TodoCardWrapper>
    </>
  );
};

export default MainPage;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TodoCardWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
`;
