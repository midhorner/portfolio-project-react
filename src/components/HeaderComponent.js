import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, Modal, ModalHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Reservations from './ReservationsComponent';
import Events from './EventsComponent';
import '../styles/HeaderComponent.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      showX: false,
      isModalOpen1: false
    };
  }

  toggleModal1 = () => {
    this.setState({
      isModalOpen1: !this.state.isModalOpen1
    });
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      showX: !this.state.showX
    });
  }

  render() {
    return(
      <>

      <Navbar light sticky="top" expand="lg" className="py-0">
        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/smokelogo.png" height="100" width="auto" alt="Smoke Logo"/></NavbarBrand>
        <button className="navbar-toggler" type="button" onClick={this.toggleNav}>
          <span className={`bars ${this.state.showX ? 'hide' : 'show'}`}>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </span>
          <div className={`close-icon py-1 ${!this.state.showX ? 'hide' : 'show'}`}>&#10006;</div>
        </button>
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar className="ml-auto text-center">            
            <NavItem>
              <NavLink className="nav-link" to='/about'>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/menu'>
                Menu
              </NavLink>
            </NavItem>
              <NavItem>
              <NavLink className="nav-link" to='/reservations' onClick={this.toggleModal1}>
                Reservations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/events'>
                Events
              </NavLink>              
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/merch'>
                Merch
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/orderonline'>
                Order Online
              </NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>

      <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>
        <ModalHeader toggle={this.toggleModal1}>Make a Reservation</ModalHeader>
        <Reservations />
      </Modal>
      <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
        <ModalHeader toggle={this.toggleModal2}>Events</ModalHeader>
        <Events />
      </Modal>

    </>

    );
  }
}

export default Header;