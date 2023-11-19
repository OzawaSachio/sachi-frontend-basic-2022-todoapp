import styled from "styled-components";

const Alert = ({ visible, errortext }) => {
  return <AlertText isActive={visible}> {errortext} </AlertText>;
};

const AlertText = styled.div`
  color: ${(props) => (props.isActive ? "red" : "blue")};
`;

export default Alert;
