import { NavLink } from 'react-router-dom'
import pilarnav from '../../assets/img/pilar-nav.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid mr-lg-3 ml-lg-5">
    <NavLink to={'/'} >
        <img
        src={pilarnav}
        alt="Bootstrap"
        width={70}
        height={70}
        />
    </NavLink>
    <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span className="toggler-icon" />
      <span className="toggler-icon" />
      <span className="toggler-icon" />
    </button>
    <div className="collapse navbar-collapse p-2  m-2" id="navbarNav">
      <ul className="nav ms-auto nav-pills custom-pills">
        <li className="nav-item">
        <NavLink to={`/`}
            className="nav-link fw-bold"
            >
            Home
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={`/about`}
            className="nav-link fw-bold"
            >
            About
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to={`/services`}
            className="nav-link fw-bold"
            >
            Services
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={`/contactus`}
            className="nav-link fw-bold"
            >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar