import React, { useState, useLayoutEffect, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Sling as Hamburger } from 'hamburger-react';
import { useMediaPredicate } from 'react-media-hook';
import Nav from './Nav';
import { debounce } from '../lib/helpers';

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "assets/images/logo.png" }) {
      childImageSharp {
        fluid(quality: 70, maxWidth: 181) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function Header() {
  const data = useStaticQuery(query);

  const [isOpen, setOpen] = useState(false);

  // Check if min-width > 992px every 1 second after user resizes window, if true, setOpen(false) to hide nav
  const isDesktop = useMediaPredicate('(min-width: 992px)');

  // Initialize smooth scroll plugin, calculates header height so does not overshoot on scroll (based on header height, ie desktop/mobile are different)
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]', {
      header: 'header',
    });
  }

  useLayoutEffect(() => {
    const dbHandleResize = debounce(function handleResize() {
      if (isDesktop) {
        setOpen(false);
      }
    }, 1000);

    window.addEventListener('resize', dbHandleResize);

    return () => {
      window.removeEventListener('resize', dbHandleResize);
    };
  });

  // Make sure nav closes after user selects link, passed down as prop to nav component & called there
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderStyles isOpen={isOpen}>
        <div className="container">
          <div className="flexwrap">
            <Link to="/">
              <Img
                fluid={data.logo.childImageSharp.fluid}
                alt="Eddie Cleary's Logo, illustration blue framed glasses and scriptive font that reads 'Eddie Cleary' "
              />
            </Link>
            <Nav handleClick={handleClick} />
            <Hamburger
              label="Show menu"
              toggled={isOpen}
              toggle={setOpen}
              color="#ccc"
            />
          </div>
        </div>
      </HeaderStyles>
    </>
  );
}

const HeaderStyles = styled.header`
  height: 100vh;
  max-height: ${(props) => (props.isOpen ? '45rem' : '8.3rem')};
  transition: max-height 0.5s ease;
  overflow: hidden;

  .flexwrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gatsby-image-wrapper {
    width: 135px;
    height: auto;
    outline: none;
  }

  nav.nav {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 120%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.4rem;
    transition: opacity 0.4s ease;

    /* When Nav Toggled */
    ${(props) =>
      props.isOpen &&
      css`
        opacity: 1;
        pointer-events: all;
        max-height: ${(props) => (props.isOpen ? '45rem' : '8.3rem')};
        transition: max-height 0.5s ease;
      `}

    a {
      margin: 3.1rem 0;
    }
  }

  .hamburger-react {
    &:hover {
      div {
        background-color: var(--color-accent) !important;
      }
    }
  }

  @media (min-width: 768px) {
    max-height: ${(props) => (props.isOpen ? '50rem' : '10.5rem')};

    .gatsby-image-wrapper {
      width: 18.1rem;
    }
  }

  @media (min-width: 992px) {
    ${(props) =>
      !props.isOpen &&
      css`
        max-height: 12rem;

        nav.nav {
          position: relative;
          opacity: 1;
          flex-direction: row;
          pointer-events: all;

          a:not(:last-of-type) {
            margin-right: 4rem;
          }
        }

        .hamburger-react {
          display: none;
          opacity: 0;
          pointer-events: none;
        }
      `}
  }
`;
