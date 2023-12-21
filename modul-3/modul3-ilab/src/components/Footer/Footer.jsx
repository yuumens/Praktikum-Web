import './Footer.css'
import './Starter.css'
import ilabLogo from '../../assets/img/logo-ilab.png'
import fb from '../../assets/img/logo-facebook.png'
import ig from '../../assets/img/logo-instagram.png'
import twt from '../../assets/img/logo-twitter.png'

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
                <img src={ilabLogo} alt="Logo" />
              </a>
            </div>
            <p className="text">Copyright © 2022 Infinite Learning</p>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-sm-4">
          <div className="footer-link">
            <h6 className="footer-title">Services</h6>
            <ul>
              <li>
                <a href="javascript:void(0)">Email Marketing</a>
              </li>
              <li>
                <a href="javascript:void(0)">Campaigns</a>
              </li>
              <li>
                <a href="javascript:void(0)">Branding</a>
              </li>
              <li>
                <a href="javascript:void(0)">Offline</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-4">
          <div className="footer-link">
            <h6 className="footer-title">About</h6>
            <ul>
              <li>
                <a href="javascript:void(0)">Our Story</a>
              </li>
              <li>
                <a href="javascript:void(0)">Benefits</a>
              </li>
              <li>
                <a href="javascript:void(0)">Team</a>
              </li>
              <li>
                <a href="javascript:void(0)">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-4">
          <div className="footer-contact">
            <h6 className="footer-title">Follow Us</h6>
            <ul>
              <li>
                <img src={fb} alt="" /> Facebook
              </li>
              <li>
                <img src={twt} alt="" />
                Twitter
              </li>
              <li>
                <img src={ig} alt="" />
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer