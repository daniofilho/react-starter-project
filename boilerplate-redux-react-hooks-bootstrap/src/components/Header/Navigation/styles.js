import styled from 'styled-components';

export const NavigationContainer = styled.div`
  .nav {
    border-width: 0px;
    height: 100%;
    align-items: center;
  }

  .nav-item {
    a,
    .nav-item,
    .nav-link {
      padding: 0px 10px;
      color: #eee;
      font-size: 16px;
      text-transform: uppercase;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .nav-link.active {
    background: none !important;
    font-weight: bold;
    color: #fff !important;
    border-width: 0px;
  }

  .dropdown-menu {
    a,
    button {
      font-size: 13px;
    }
  }
`;
