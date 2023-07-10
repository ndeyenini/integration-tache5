/** @format */

import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../Images/fixed-width.png";
import img2 from "../Images/fixed-width (1).png";
import img3 from "../Images/fixed-width (2).png";
export const Heade = () => {
  return (
    <section className='sect'>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <h5 className='text-primary mt-5'>Welcom</h5>
            <h1 className='text-light'>
              Selling on the<br></br> internet like a pro
            </h1>
            <h4 className='text-light'>
              We know how large objects Will act, but things on a<br></br> small
              scale just do not act that way
            </h4>
            <button type='button' className='btn btn-dark mt-4' id='btn'>
              Get Quete New
            </button>
            <button type='button' className='btn btn-dark mt-5 m-4 ' id='btn'>
              Learn More
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={4} lg={4}>
            <Card
              style={{
                width: "100%",
                margin: "3%",
                height: "110%",
                top: "20%",
              }}
            >
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <img src={img1} />
                  </Col>
                </Row>
                <Row>
                  <Col md={8} className='mt-4'>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Subtitle
                      className='training'
                      style={{ position: "relative" }}
                    >
                      training Courses
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Card.Text>{/* <hr className='pr'></hr> */}</Card.Text>
                  </Col>
                </Row>
                <Card.Text className='mt-5'>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <Card
              style={{
                width: "100%",
                margin: "3%",
                height: "110%",
                top: "20%",
              }}
            >
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <img src={img2} />
                  </Col>
                </Row>
                <Row>
                  <Col md={9} className='mt-4'>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Subtitle
                      className='onb'
                      style={{ position: "relative" }}
                    >
                      2,769 online courses
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Card.Text></Card.Text>
                  </Col>
                </Row>
                <Card.Text className='mt-5'>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <Card
              className='bg-primary'
              style={{
                width: "100%",
                margin: "3%",
                height: "110%",
                top: "20%",
              }}
            >
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <img src={img3} />
                  </Col>
                </Row>
                <Row>
                  <Col md={8} className='mt-4'>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Subtitle
                      className=' text-light course'
                      style={{ position: "relative" }}
                    >
                      training Courses
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Card.Text>{/* <hr className='hr'></hr> */}</Card.Text>
                  </Col>
                </Row>
                <Card.Text className='text-light mt-5'>
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
