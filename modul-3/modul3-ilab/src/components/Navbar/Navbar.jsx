import ilablogo from '../../assets/img/logo-ilab.png'
import { NavLink } from 'react-router-dom'
import { Button, Col, Nav, Navbar} from 'react-bootstrap';

const Navbars = () => {
    return (
    <>
    <Navbar className='bg-body-tertiary' expand="lg">
      <Navbar.Brand as={NavLink} to="/" style={{marginLeft : '5vh'}}>
        <img src={ilablogo} alt="Logo" style={{width : '60%'}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-lg-auto" style={{ marginLeft: '3vh' }}>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contactus">
            Contact
          </Nav.Link>
        </Nav>
        <div style={{marginRight : '4vh'}}>
            <Col style={{ marginLeft: '3vh' }}>
              <Button variant="outline-secondary" style={{ marginRight: '10px' }}>
                Sign In
              </Button>
              <Button variant="primary">Sign Up</Button>
            </Col>
        </div>
      </Navbar.Collapse>
    </Navbar>
    </>
      
    );
  }

export default Navbars