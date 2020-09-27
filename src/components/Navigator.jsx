import React, { Component } from 'react';
import {
  Navbar,
  Nav,
} from 'bootstrap-4-react';

import './Navigator.css';

export default class Navigator extends Component {
  render() {
    return (
      <Navbar className = "color-nav" expand="md" fixed="top">
        <Navbar.Brand id="xtinapark" href="#">Xtina Park</Navbar.Brand>
        <Navbar.Toggler className = "custom-toggler" target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav ml="auto">
            <Nav.ItemLink href="#/duolivre">DUOLIVRE</Nav.ItemLink>
            <Nav.ItemLink href="#/blog">BLOG</Nav.ItemLink>
            <Nav.ItemLink href="#/contact">CONTACT</Nav.ItemLink>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
