import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const styles = {
  icon: {
    color: 'white'
  },
  navBar: {
    color: '#4582EC'
  }
}

export default function NavBar() {
  return (
    <div>
      <Navbar color='primary' light expand="md">
        <NavbarBrand href="#cards" style={styles.icon}><i className="fas fa-brain"/></NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="#cards" style={styles.icon}>Cards</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#new-card" style={styles.icon}>Make a New Card</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#practice" style={styles.icon}>Practice</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}
