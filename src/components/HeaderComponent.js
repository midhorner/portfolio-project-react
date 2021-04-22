import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../styles/HeaderComponent.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      showX: false
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      showX: !this.state.showX
    });
  }

  render() {
    return(

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
              <NavLink className="nav-link" to='/features'>
                Features
              </NavLink>
            </NavItem>
              <NavItem>
              <NavLink className="nav-link" to='/reservations'>
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

    );
  }
}

export default Header;