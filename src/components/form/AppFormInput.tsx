import styled from "styled-components";

const AppFormInput = styled.input`
  padding: 1rem;
  color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.greyishBlue};
  font-size: 15px;
  font-weight: 300;
  width: 100%;
`;

export default AppFormInput;
