import { headingLarge, headingMedium } from "@/styles/mixins";
import styled from "styled-components";

interface IAppHeading {
  large?: boolean;
}

const AppHeading = styled.h1<IAppHeading>`
  color: ${(props) => props.theme.white};
  ${(props) => (props.large ? headingLarge : headingMedium)}
`;

export default AppHeading;
