import { Helmet, HelmetProvider } from 'react-helmet-async'
import pilarhome from '../../assets/img/pilar-home 1.png' 
import './Home.css'
import {NavLink} from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Pilar Kontinental - Home</title>
      </Helmet>
      <div id="home">
      <div className="container">
        <div className="home-page ">
        <img src={pilarhome} alt="pilar-home" />
        <p className="text-light mt-sm-3">Lets Make Awesome Project With Us</p>
        <div className="col-md-10">
            <NavLink to={'/contactus'}>
                <button type="button" className="start-button fw-bold">
                    GET STARTED
                </button>
            </NavLink>
        </div>
      </div>
      </div>
      </div>
    </HelmetProvider>
    
    </>
  )
}

export default Hero