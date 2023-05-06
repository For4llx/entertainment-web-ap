import AppHeading from "@/components/ui/AppHeading";
import AppParagraph from "@/components/ui/AppParagraph";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Thumbnail = styled.div``;
const Image = styled.img`
  border-radius: 8px;
`;

const Carousel = () => {
  return (
    <Container>
      <AppHeading large as="h2">
        Trending
      </AppHeading>
      <Thumbnail>
        <picture>
          <source srcSet="./assets/thumbnails/112/regular/large.jpg" />
          <source srcSet="./assets/thumbnails/112/regular/medium.jpg" />
          <source srcSet="./assets/thumbnails/112/regular/small.jpg" />
          <Image src="./assets/thumbnails/112/regular/large.jpg" />
        </picture>
        <AppHeading small as="h3">
          Beyond Earth
        </AppHeading>
        <AppParagraph>2019 · Movie · PG</AppParagraph>
      </Thumbnail>
    </Container>
  );
};

export default Carousel;
