import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube, IoMap, IoCall, IoMail } from "react-icons/io5";
import './Footer.css'
import './starter.css'
import pilarhome from '../../assets/img/pilar-home 1.png';

const Footer = () => {
  return (
    <footer className="footer-area footer-one">
  <div className="footer-widget">
    <div className="container-lg">
      <div className="row">
        <div className="col-xl-6 col-lg-4 col-sm-12">
          <div className="f-about">
            <div className="footer-logo">
              <a href="javascript:void(0)">
                <img src={pilarhome} alt="Logo" />
              </a>
            </div>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-sm-4">
          <div className="footer-link">
            <h6 className="footer-title">Company</h6>
            <ul>
              <li>
                <a href="javascript:void(0)">About</a>
              </li>
              <li>
                <a href="#contact-start">Contact</a>
              </li>
              <li>
                <a href="javascript:void(0)">Marketing</a>
              </li>
              <li>
                <a href="javascript:void(0)">Awards</a>
              </li>
            </ul>
          </div>
          {/* footer link */}
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-4">
          <div className="footer-link">
            <h6 className="footer-title">Services</h6>
            <ul>
              <li>
                <a href="javascript:void(0)">Products</a>
              </li>
              <li>
                <a href="javascript:void(0)">Business</a>
              </li>
              <li>
                <a href="javascript:void(0)">Developer</a>
              </li>
              <li>
                <a href="javascript:void(0)">Insights</a>
              </li>
            </ul>
          </div>
          {/* footer link */}
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-4">
          {/* Start Footer Contact */}
          <div className="footer-contact">
            <h6 className="footer-title">Help &amp; Suuport</h6>
            <ul>
              <li>
                <IoMap/> Malang, Jawa Timur,
                Indonesia
              </li>
              <li>
              <IoCall/> +62 812345678
              </li>
              <li>
              <IoMail/>
                pilarkontinental@gmail.com
              </li>
            </ul>
          </div>
          {/* End Footer Contact */}
        </div>
      </div>
      {/* row */}
    </div>
    {/* container */}
  </div>
  {/* footer widget */}
  <div className="footer-copyright">
    <div className="container-lg">
      <div className="row">
        <div className="col-lg-12">
          <div
            className="
           copyright
           text-center
           d-md-flex
           justify-content-between
           align-items-center
           mr-5
           "
          >
            <p className="text">
              Copyright © 2024 Pilar Kontinental. Made With Bootstrap UI
              Components
            </p>
            <ul className="social">
              <li>
                <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel='noreferrer'>
                    <IoLogoYoutube/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel='noreferrer'>
                    <IoLogoInstagram/>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@yumenhere" target="_blank" rel='noreferrer'>
                    <IoLogoTiktok/>
                </a>
              </li>
            </ul>
          </div>
          {/* copyright */}
        </div>
      </div>
      {/* row */}
    </div>
    {/* container */}
  </div>
  {/* footer copyright */}
</footer>

  )
}

export default Footer