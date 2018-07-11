import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href='#'>Get Started!</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/chords'>Chords</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
