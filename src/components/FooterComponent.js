import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterComponent.css';

function Footer() {
  return(
    <footer className="site-footer fixed-bottom">
      <div className="container-fluid py-2">
        <div className="row align-items-center">
          <div className="col text-center text-md-left">
            <a className="btn btn-social-icon btn-lg" href="//instagram.com/smokepgh"><i className="fa fa-instagram"></i></a>
            <a className="btn btn-social-icon btn-lg" href="//smokepgh.com/s/order"><i className="fa fa-square"></i></a>          
          </div>      
          <div className="col-12 col-md text-center text-md-right">
            <Link className="nav-link d-inline" id="contactLink" to="/contact">Contact</Link>
            <Link className="nav-link d-inline" id="careersLink" to="/careers">Careers</Link>
            <Link className="nav-link d-inline" id="locationLink" to="/location">Location</Link>
          </div>
        </div>
      </div>  

    </footer>
  );
}

export default Footer;