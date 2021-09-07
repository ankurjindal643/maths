import "./navbar.css";
import maths from "./calculator.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
let Navbar = () => {
  let history = useHistory();
  let [isActive, setActive] = useState(false);

  let toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="main-div">
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <img id="logo" className="img-tag" src={maths} alt="" />
          <span className="navbar-brand mb-0 h1 name-heading">
            <Link className="nav-link" id="name" to="/content">
              Manoj Bansal
            </Link>
          </span>
          <div className="options" id="active-menu">
            <a className="home">
              <Link className="nav-link" id="idhome" to="/content">
                HOME
              </Link>
            </a>
            <a className="home" id="idAbout">ABOUT</a>
            <a className="home">
              <Link className="nav-link" id="ten" to="/ten">
                10th
              </Link>
            </a>
            <a className="home">
              <Link className="nav-link" id="eleven" to="/eleven">
                11th
              </Link>
            </a>
            <a className="home">
              <Link className="nav-link" id="twelve" to="/twelve">
                12th
              </Link>
            </a>
          </div>
          {/* <div className="menu-icon">
            <span
              onClick={() => {
                toggleClass();
              }}
              className= {!isActive ? "material-icons" : "active material-icons" }
            >
              menu
            </span>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
