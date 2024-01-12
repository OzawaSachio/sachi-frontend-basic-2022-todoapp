import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
      <TodoCardWrapper>
        <TodoCard />
      </TodoCardWrapper>
    </MainPageWrapper>
  );
};

export default MainPage;

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TodoCardWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  width: 100%;
  max-width: 500px;
`;
