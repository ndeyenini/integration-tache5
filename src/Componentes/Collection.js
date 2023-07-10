

import { Container, Row, Col } from "react-bootstrap";
import img1 from "../Images/fixed-width fixed-height.png";
import img2 from "../Images/Rectangle 51.png";
import img3 from "../Images/image 3.png";
import img4 from "../Images/image 1.png";
import img5 from "../Images/Rectangle 52.png";

export const Collect = () => {
  return (
    <section className='collect'>
      <Container>
        <Row>
          <Col md={6} lg={6} className='collect'>
            <img src={img1} className='img1' />
            <h1>
              Packages that are <br></br> aprodable
            </h1>
            <p className='mt-4'>
              Problems trying to resolve the conflict between<br></br> the two
              major realms of Classical physics<br></br> Newtonian mechanicsy
            </p>
            <h5 className='text-primary'>Learn more</h5>
          </Col>
          <Col md={6} lg={6} className='col'>
            <img src={img2} className='img2 w-100' />
            <img src={img3} className='img3 ' />
            <img src={img4} className='img4' />
            <img src={img5} className='img5' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
