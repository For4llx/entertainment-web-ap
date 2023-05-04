import styled from "styled-components";

const AppInputField = styled.input`
  padding: 1rem;
  color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.greyishBlue};
  font-size: 15px;
  font-weight: 300;
`;

export default AppInputField;
