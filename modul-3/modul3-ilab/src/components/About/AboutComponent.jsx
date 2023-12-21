import { Col, Container, Row } from "react-bootstrap"
import './About.css'
import ilablogo from '../../assets/img/logo-ilab.png'
import { Helmet, HelmetProvider } from "react-helmet-async"

const AboutComponent = () => {
  return (
    <HelmetProvider>
        <Helmet>
            <title>i-Lab - About</title>
        </Helmet>
        <Container className="about">
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <div className="about-image">
                  <img src={ilablogo} alt="About Us" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-content">
                  <h2>About i-Lab</h2>
                  <p>
                    Laboratorium Teknik informatika berfungsi sebagai pusat pembelajaran praktis dan eksperimental yang dipergunakan oleh
                    mahasiswa dan pelayanan untuk riset dan konsultasi keteknikan mencakup desian software untuk animasi, administrasi, grafis, dll.
                  </p>
                  <p>
                    Nulla facilisi. Sed dignissim euismod nunc id congue. Fusce auctor purus ut mi mattis laoreet.
                  </p>
                </div>
              </Col>
            </Row>
        </Container>
    </HelmetProvider>
    
  )
}

export default AboutComponent