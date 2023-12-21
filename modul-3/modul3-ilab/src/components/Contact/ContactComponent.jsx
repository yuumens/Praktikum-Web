import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactComponent = () => {
  const ContactStyle = {
    minHeight : '70vh',
    marginTop : '10vh'
  }

  return (
    <HelmetProvider>
    <Helmet>
      <title>i-Lab - Contact</title>
    </Helmet>
      <Container>
      <Row className="justify-content-center" style={ContactStyle}>
        <Col lg={10} md={9} sm={10}>
          <div className="d-flex justify-content-center">
            <h2>Contact Us</h2>
          </div>
          <p className='d-flex justify-content-center'>Feel free to reach out to us for any inquiries or questions.</p>

          <Form className='m-md-3 m-sm-3'>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      </Container>
    </HelmetProvider>
    
  )
}

export default ContactComponent