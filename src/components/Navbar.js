import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { ReactComponent as GitHub} from '../img/github-icon.svg'

import { color } from '../utilities/styles';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const GithubIcon = styled(GitHub)`
  height: 3rem;
  width: 3rem;
  fill: ${color.white.alt};
  cursor: pointer;
`;

const NavItem = styled.span`
  color: ${color.white.alt};
  transition: all .2s;

  a {
    color: inherit;
    text-decoration: none;
  }
  
  &:hover {
    color: ${color.white.main};
    transform: scale(1.1);
    text-decoration: underline;
    text-decoration-color: ${color.white.main};
  }
`;

const Navbar = () => (
  <NavWrapper>
    <NavItem>
      <Link to="/" className="navbar-item">
        Mat Dupont
      </Link>
    </NavItem>
    <NavItem>
      <a
        className="navbar-item"
        href="https://github.com/matldupont"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </NavItem>
    
  </NavWrapper>
)

export default Navbar
