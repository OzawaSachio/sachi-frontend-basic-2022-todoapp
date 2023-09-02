import COLOR from "../../../variables/color";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";

const MainPage = () => {
  return (
    <StyledWrapper>
      <TitleWrapper>
        <Title></Title>
      </TitleWrapper>
      <TodoCardWrapper>
        <TodoCard></TodoCard>
      </TodoCardWrapper>
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const TodoCardWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
`;
