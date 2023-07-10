/** @format */

import { Container, Row, Col } from "react-bootstrap";
export const Marg = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12} lg={12} className='mar'>
            <div className='mot'>
              <h5 className='text-primary'>Pratice Advice</h5>
              <h1>Featured products</h1>
              <p>
                problems trying to resolve the conflict between <br></br>the two
                major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12} style={{ top: 50 }} className='email mt-5'>
            <input type='input' placeholder='Your Email' className='input' />
            <button type='button' className='btn btn-primary' id='but'>
              Sibscribe
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
