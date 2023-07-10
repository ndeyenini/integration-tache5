/** @format */

import { Container, Row, Col } from "react-bootstrap";
import scrip1 from "../Images/circle.png";
import scrip2 from "../Images/cirl.png";
import scrip3 from "../Images/stars.png";
export const Hove = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} lg={6} className='mt-1'>
            <div className='par'>
              <h5 className='text-primary'>Pratice Advice</h5>
              <h1>Our Experts Teacher</h1>
              <p>
                problems trying to resolve the conflict between <br></br>the two
                major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </Col>
        </Row>
        <Row className='mt-5 '>
          <Col md={6} lg={6}>
            <img src={scrip1} className='image' />
            <p className='mt-3'>
              Slate helps you see how many more days<br></br> you need to work
              to reach your financial<br></br> goal for the month and year.
            </p>
            <img src={scrip3} />
            <h4 className='mt-3'>Regina Miles</h4>
            <h5>Designer</h5>
          </Col>
          <Col md={6} lg={6}>
            <img src={scrip2} className='image' />
            <p className='mt-3'>
              Slate helps you see how many more days<br></br> you need to work
              to reach your financial<br></br> goal for the month and year.
            </p>
            <img src={scrip3} />
            <h4 className='mt-3'>Regina Miles</h4>
            <h5>Designer</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
