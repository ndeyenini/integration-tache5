
import { Container, Row, Col } from "react-bootstrap";
import im1 from "../Images/product-cover-66.png";
import im2 from "../Images/product-cover-65.png";
import im3 from "../Images/product-cover-63.png";
import im4 from "../Images/product-cover-64.png";
import im from "../Images/like.png";
import im01 from "../Images/basket.png";
import im02 from "../Images/lik.png";
import fram from "../Images/Frame 4.png";
import fram1 from "../Images/sales.png";
import fram2 from "../Images/Frame 1.png";
import prin from "../Images/prices.png";

export const Par = () => {
  return (
    <section>
      <Container className='container-fluid'>
        <Row>
          <Col md={6} lg={6}>
            <div className='par '>
              <h5 className='text-primary '>Pratice Advice</h5>
              <h1>Make online education accessible</h1>
              <p>
                problems trying to resolve the conflict between <br></br>the two
                major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5'>
        <Row>
          <Col md={3} lg={3} className='col1' style={{ position: "relative" }}>
            {/* <p className='sale'>sale</p> */}
            <img src={im1} className='im1' style={{ position: "relative" }} />
            <p className='salle' style={{ position: "absolute" }}>
              sale
            </p>
            <img
              src={im}
              className='im '
              style={{ position: "absolute", top: 250, left: 80 }}
            />
            <img
              src={im01}
              className=''
              style={{ position: "absolute", top: 250, left: 130 }}
            />
            <img
              src={im02}
              className='im02 '
              style={{ position: "absolute", top: 250, left: 180 }}
            />
            <Row className='mt-5'>
              <Col md={6} lg={6}>
                <p className='top text-primary'>English</p>
              </Col>
              <Col md={6} lg={6}>
                <img src={fram} />
              </Col>
            </Row>
            <h4>Grapkic Design</h4>
            <p>
              We focus on ergonomics<br></br> and meeting you....
            </p>
            <Row>
              <Col md={12} lg={12}>
                <img src={fram1} style={{ width: 100 }} />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <img src={prin} />
              </Col>
            </Row>
            <img src={fram2} />
            <buton type='button' className='btn text-primary' id='button'>
              Learn More
            </buton>
          </Col>
          <Col md={3} lg={3} style={{ position: "relative" }}>
            <img src={im2} style={{ position: "relative" }} />
            <p className='salle' style={{ position: "absolute" }}>
              sale
            </p>
            <img
              src={im}
              className='im '
              style={{ position: "absolute", top: 250, left: 80 }}
            />
            <img
              src={im01}
              className=''
              style={{ position: "absolute", top: 250, left: 130 }}
            />
            <img
              src={im02}
              className='im02 '
              style={{ position: "absolute", top: 250, left: 180 }}
            />

            <Row className='mt-5'>
              <Col md={6} lg={6}>
                <p className='top text-primary'>English</p>
              </Col>
              <Col md={6} lg={6}>
                <img src={fram} />
              </Col>
            </Row>
            <h4>Grapkic Design</h4>
            <p>
              We focus on ergonomics<br></br> and meeting you....
            </p>
            <Row>
              <Col md={12} lg={12}>
                <img src={fram1} style={{ width: 100 }} />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <img src={prin} />
              </Col>
            </Row>
            <img src={fram2} />
            <buton type='button' className='btn text-primary' id='button'>
              Learn More
            </buton>
          </Col>
          <Col md={3} lg={3} style={{ position: "relative" }}>
            <img src={im3} style={{ position: "relative" }} />
            <p className='salle' style={{ position: "absolute" }}>
              sale
            </p>
            <img
              src={im}
              className='im '
              style={{ position: "absolute", top: 250, left: 80 }}
            />
            <img
              src={im01}
              className=''
              style={{ position: "absolute", top: 250, left: 130 }}
            />
            <img
              src={im02}
              className='im02 '
              style={{ position: "absolute", top: 250, left: 180 }}
            />
            <Row className='mt-5'>
              <Col md={6} lg={6}>
                <p className='top text-primary'>English</p>
              </Col>
              <Col md={6} lg={6}>
                <img src={fram} />
              </Col>
            </Row>
            <h4>Grapkic Design</h4>
            <p>
              We focus on ergonomics<br></br> and meeting you....
            </p>
            <Row>
              <Col md={12} lg={12}>
                <img src={fram1} style={{ width: 100 }} />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <img src={prin} />
              </Col>
            </Row>
            <img src={fram2} />
            <buton type='button' className='btn text-primary' id='button'>
              Learn More
            </buton>
          </Col>
          <Col md={3} lg={3} style={{ position: "relative" }}>
            <img src={im4} style={{ position: "relative" }} />
            <p className='salle' style={{ position: "absolute" }}>
              sale
            </p>
            <img
              src={im}
              className='im '
              style={{ position: "absolute", top: 250, left: 80 }}
            />
            <img
              src={im01}
              className=''
              style={{ position: "absolute", top: 250, left: 130 }}
            />
            <img
              src={im02}
              className='im02 '
              style={{ position: "absolute", top: 250, left: 180 }}
            />
            <Row className='mt-5'>
              <Col md={6} lg={6}>
                <p className='top text-primary'>English</p>
              </Col>
              <Col md={6} lg={6}>
                <img src={fram} />
              </Col>
            </Row>
            <h4>Grapkic Design</h4>
            <p>
              We focus on ergonomics<br></br> and meeting you....
            </p>
            <Row>
              <Col md={12} lg={12}>
                <img src={fram1} style={{ width: 100 }} />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <img src={prin} />
              </Col>
            </Row>
            <img src={fram2} />
            <buton type='button' className='btn text-primary' id='button'>
              Learn More
            </buton>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
