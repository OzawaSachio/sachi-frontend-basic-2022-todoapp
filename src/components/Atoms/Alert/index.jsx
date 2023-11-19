import styled from "styled-components";

const Alert = ({ visible, errortext }) => {
  return <AlertText isActive={visible}> {errortext} </AlertText>;
};

const AlertText = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;

export default Alert;
