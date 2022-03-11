import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact_us";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="alterra">
              <a href="index.html">
                <img
                  className="logo-atas"
                  src="./assets/img/logo-ALTA@2x.png"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            {/* <!-- <div className="container"> --> */}
            <div className="row align-items-center navig">
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                <Link to="/">
                  {" "}
                  <a className="aktif">HOME</a>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                <Link to="/about">
                  {" "}
                  <a>ABOUT</a>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                <a href="#">EXPERIENCE</a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                <Link to="/contact">
                  <a>CONTACT</a>
                </Link>
              </div>
            </div>
            {/* <!-- </div> --> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
