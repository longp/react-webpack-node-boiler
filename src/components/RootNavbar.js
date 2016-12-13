import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class RootNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse className="navbar-wrapper">
          <Navbar.Header>
            <Navbar.Brand>
              NAVBAR
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navleft">
              LINKS
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
