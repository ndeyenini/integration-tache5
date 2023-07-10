

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export const Bacis = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='navs'>
      <Container className='contain'>
        <Navbar.Brand
          href='#home'
          className='text-light'
          style={{ fontSize: "25px" }}
        >
          BrandName
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav text-light' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto' style={{ fontSize: "25px" }}>
            <Nav.Link href='#home' className='text-light'>
              Home
            </Nav.Link>
            <Nav.Link href='#product' className='text-light'>
              Product
            </Nav.Link>
            <Nav.Link href='#pricing' className='text-light'>
              Pricing
            </Nav.Link>
            <Nav.Link href='#contact' className='text-light'>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href='#deets'
              className='text-light mt-2'
              style={{ fontSize: "25px" }}
            >
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              <button
                type='button'
                className='btn btn-primary  '
                style={{ fontSize: "25px", with: "100%" }}
              >
                Join US
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default CollapsibleExample;
