import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Sling as Hamburger } from 'hamburger-react';

export default function Header() {
  const data = useStaticQuery(query);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HeaderStyles isOpen={isOpen}>
        <div className="container">
          <div className="flexwrap">
            <Img fluid={data.logo.childImageSharp.fluid} alt="Eddie Cleary's Logo, illustration blue framed glasses and scriptive font that reads 'Eddie Cleary' "/>
            <nav>
              <Link to="#portfolio">Portfolio</Link>
              <Link to="/resume">Resumé</Link>
              <Link to="#about">About Me</Link>
              <Link className="btn filled" to="#about">Contact</Link>
            </nav>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#ccc"/>
          </div>
        </div>
      </HeaderStyles>
    </>
  )
}

const HeaderStyles = styled.header`
  height: 100vh;
  max-height: ${props => props.isOpen ? '45rem': '8.3rem'};
  transition: max-height 0.5s ease;
  overflow: hidden;

  .flexwrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 135px;
    height: auto;
  }

  nav {
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
    ${props => props.isOpen && css`
      opacity: 1;
      pointer-events: none;
      max-height: ${props => props.isOpen ? '45rem': '8.3rem'};
      transition: max-height 0.5s ease;
    `}

    a {
      margin: 3.1rem 0;
    }
  }
`

export const query = graphql`
  query {
    logo: file(relativePath: {eq: "assets/images/logo.png"}){
      childImageSharp{
        fluid(quality:70,maxWidth:166){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`