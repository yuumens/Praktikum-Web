import { Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Homepage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import Footer from '../components/Footer/Footer'
import Navbars from '../components/Navbar/Navbar'

const Routers = () => {
  return (
    <>
    <Navbars/>
    <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/contactus' Component={ContactPage}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Routers