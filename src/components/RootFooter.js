import React, { Component } from 'react';
import { Button, Navbar, NavItem, Nav, Row, Col, FormGroup, FieldGroup, Checkbox, InputGroup, FormControl } from 'react-bootstrap'

export default class FooterNavbar extends Component {
  render() {
    return (
      <section>
        <footer className="footer-wrapper">
          <div className="container">
            <ul className="list-inline footer-menu">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul className="list-inline social-menu">
              <li>
                <a href="#"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-pinterest"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
      );
    }
  }
