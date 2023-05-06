import { headingLarge, headingMedium, headingSmall } from "@/styles/mixins";
import styled from "styled-components";

interface IAppHeading {
  large?: boolean;
  small?: boolean;
}

const AppHeading = styled.h1<IAppHeading>`
  color: ${(props) => props.theme.white};
  ${(props) =>
    props.large ? headingLarge : props.small ? headingSmall : headingMedium}
`;

export default AppHeading;
