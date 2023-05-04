import styled from "styled-components";

const LoginContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.semiDarkBlue};
  width: 400px;
`;

const SignUp = () => {
  return <LoginContainer></LoginContainer>;
};

export default SignUp;
