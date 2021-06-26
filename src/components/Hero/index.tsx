import tw from "twin.macro";

const Section = tw.section`text-gray-600`;
const Container = tw.div`container px-5 py-24 mx-auto`;
const Title = tw.h1`sm:text-3xl text-2xl font-medium text-center text-gray-900 mb-20`;

export interface HeroProps {
  title?: string;
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { title = "Hello World!" } = props;
  return (
    <>
      <Section>
        <Container>
          <Title>{title}</Title>
        </Container>
      </Section>
    </>
  );
};
