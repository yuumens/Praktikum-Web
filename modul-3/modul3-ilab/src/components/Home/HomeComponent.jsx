import { Container} from "react-bootstrap"
import './Home.css'
import { Helmet, HelmetProvider } from "react-helmet-async"

const HomeComponent = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title> i-Lab - Home</title>
      </Helmet>
      <div className="BackgroundStyle">
      <Container className="Containers">
        <h1>Selamat Datang</h1>
        <p>di website praktikum Pemrograman Website</p>
      </Container>
    </div>
    </HelmetProvider>
    

  )
}

export default HomeComponent