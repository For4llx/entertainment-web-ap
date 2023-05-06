import styled from "styled-components";

const BrowseLayout = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
  padding: 2rem;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export default BrowseLayout;
