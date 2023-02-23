import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <h3 className="py-3">About Us</h3>
      <p className="m-0 fst-italic">
        "A journey of a thousand miles begin with a single step"
      </p>
      <p className="py-4 text-justify">
        Being a self-taught developer is a challenging journey. But I'm willing
        to take the leap of faith and do whatever it takes to make it happen.
        Sometimes we just have to make the necessary sacrifices and endure
        hardships to achieve our goals.
      </p>
    </Container>
  );
};

export default AboutUs;
