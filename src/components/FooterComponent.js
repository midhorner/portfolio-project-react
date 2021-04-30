import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader } from 'reactstrap';
import Contact from './ContactComponent';
import Careers from './CareersComponent';
import '../styles/FooterComponent.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen1: false,
      isModalOpen2: false
    };
  }

  toggleModal1 = () => {
    this.setState({
      isModalOpen1: !this.state.isModalOpen1
    });
  }

  toggleModal2 = () => {
    this.setState({
      isModalOpen2: !this.state.isModalOpen2
    });
  }

  render() {
    return(
      <footer className="site-footer fixed-bottom">
        <div className="container-fluid py-2">
          <div className="row align-items-center">
            <div className="col text-center text-md-left">
              <a className="btn btn-social-icon btn-lg" href="//instagram.com/smokepgh" target="blank"><i className="fa fa-instagram"></i></a>
              <a className="btn btn-social-icon btn-lg" href="//smokepgh.com/s/order" target="blank"><i className="fab fa-squarespace"></i></a>          
            </div>      
            <div className="col-12 col-md text-center text-md-right">
              <Link className="nav-link d-inline" id="contactLink" onClick={this.toggleModal1}>Contact</Link>
              <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1} className="modal-dialog-centered">
                <ModalHeader toggle={this.toggleModal1}>How Can We Help You?</ModalHeader>
                <Contact />
              </Modal>
              <Link className="nav-link d-inline" id="careersLink" onClick={this.toggleModal2}>Careers</Link>
              <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2} className="modal-dialog-centered modal-lg">
                <ModalHeader toggle={this.toggleModal2}>Join The Team</ModalHeader>
                <Careers />               
              </Modal>
              <Link className="nav-link d-inline" id="locationLink" to="/location">Location</Link>
            </div>
          </div>
        </div>  

      </footer>
    );
  }
}

export default Footer;