import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as _Link } from 'next/link';

import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Navbar,
} from 'reactstrap';
import { NavigationContainer } from './styles';

export default function Navigation() {
  const page = useSelector(state => state.navigation.page);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <NavigationContainer>
      <Navbar color="faded" light>
        <Nav>
          <NavItem>
            <NavLink
              tag={_Link}
              className={page === 'home' ? 'nav-link active' : ''}
              href="/"
            >
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              tag={_Link}
              className={page === 'page' ? 'nav-link active' : ''}
              href="/page"
            >
              Page
            </NavLink>
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
      </Navbar>
    </NavigationContainer>
  );
}
