/** @format */

import { Container, Row, Col } from "react-bootstrap";
import facebook from "../Images/Vector.png";
import instagrame from "../Images/instagram.png";
import twitter from "../Images/twitter.png";

export const Foote = () => {
  return (
    <section className='footer'>
      <Container>
        <Row>
          <Col md={3} lg={3} className='mt-5'>
            <h3 className='text-light'>Get In Touch</h3>
            <h4 className='text-light'>
              the quick fox jumps over the<br></br> lazy dog
            </h4>
            <img src={facebook} className='m-2' />
            <img src={instagrame} className='m-2' />
            <img src={twitter} className='m-2' />
          </Col>
          <Col md={3} lg={3} className='mt-5 text-light'>
            <h3>Company info</h3>
            <h4>About Us</h4>
            <h4>Carrier</h4>
            <h4>We are hiring</h4>
            <h4>Blog</h4>
          </Col>
          <Col md={3} lg={3} className='mt-5 text-light'>
            <h3>Features</h3>
            <h4>Business Mrketing</h4>
            <h4>User Analytic</h4>
            <h4>Live Chat</h4>
            <h4>Unllmited Supprt</h4>
          </Col>
          <Col md={3} lg={3} className='mt-5 text-light'>
            <h3>Ressources</h3>
            <h4>Ios & Adndroid</h4>
            <h4>Watch a Demo</h4>
            <h4>Customers</h4>
            <h4>API</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
