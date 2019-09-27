import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as _Link } from 'react-router-dom';

import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { NavigationContainer } from './styles';

export default function Navigation() {
  const page = useSelector(state => state.navigation.page);

  const [navBarOpened, setnavBarOpened] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  function toggleNavbar() {
    setnavBarOpened(!navBarOpened);
  }

  return (
    <NavigationContainer>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={navBarOpened} navbar>
          <Nav>
            <NavItem>
              <NavItem>
                <NavLink
                  tag={_Link}
                  class={page === 'home' && 'nav-link active'}
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
            </NavItem>

            <NavItem>
              <NavItem
                tag={_Link}
                class={page === 'page' && 'nav-link active'}
                to="/page"
              >
                Page
              </NavItem>
            </NavItem>

            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </NavigationContainer>
  );
}
