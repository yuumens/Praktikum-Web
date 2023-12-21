import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Routers() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path="/contactus" Component={ContactPage}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Routers