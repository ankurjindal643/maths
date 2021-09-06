import "./navbar.css";
import maths from "./calculator.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
let Navbar = () => {
  let history = useHistory();
  return (
    <div className="main-div">
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
          <img className="img-tag" src={maths} alt="" />
          <span class="navbar-brand mb-0 h1 name-heading">
            <Link class="nav-link" id="name" to="/content">
              Manoj Bansal
            </Link>
          </span>
          <div className="options">
            <a class="home" >
              <Link class="nav-link" id="idhome" to="/content">
                HOME
              </Link>
            </a>
            <a class="home">ABOUT</a>
            <a class="home">
              <Link class="nav-link" id="ten" to="/ten">
                10th
              </Link>
            </a>
            <a class="home">
              <Link class="nav-link" id="eleven" to="/eleven">
                11th
              </Link>
            </a>
            <a class="home">
              <Link class="nav-link" id="twelve" to="/twelve">
                12th
              </Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
