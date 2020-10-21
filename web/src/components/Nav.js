import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export default function Nav({ handleClick }) {
  return (
    <>
      <NavStyles className="nav">
        <Link onClick={handleClick} to="/#portfolio">
          Portfolio
        </Link>
        <Link onClick={handleClick} to="/resume">
          Resumé
        </Link>
        <Link onClick={handleClick} to="/#about">
          About Me
        </Link>
        <Link onClick={handleClick} className="btn filled" to="/#contact">
          Contact
        </Link>
      </NavStyles>
    </>
  );
}

const NavStyles = styled.nav`
  margin-top: 1rem;

  a:not(:last-of-type):hover {
    color: var(--color-accent);
  }
`;
