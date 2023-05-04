import AppButton from "@/components/ui/AppButton";
import AppHeading from "@/components/ui/AppHeading";
import AppInputField from "@/components/ui/AppInputField";
import AppLink from "@/components/ui/AppLink";
import AppParagraph from "@/components/ui/AppParagraph";
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SignUpRedirection = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <AppHeading large>Login</AppHeading>
        <FormFieldContainer>
          <AppInputField placeholder="Email address" />
          <AppInputField placeholder="Password" />
        </FormFieldContainer>
        <AppButton>Login to your account</AppButton>
      </LoginForm>
      <SignUpRedirection>
        <AppParagraph>Don't have an account?</AppParagraph>
        <AppLink>Sign up</AppLink>
      </SignUpRedirection>
    </LoginContainer>
  );
};

export default Login;
