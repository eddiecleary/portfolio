import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiChevronRight as Chevron } from 'react-icons/fi';
import heroImage from '../../assets/images/hero.svg';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <h1>eddie cleary is a <br /> front-end developer</h1>
        <h3>currently looking for <br /> remote opportunities</h3>
        <div className="btnWrap">
          <Link className="btn filled" to="#contact">Hire me</Link>
          <Link className="btn" to="#portfolio">Learn more<Chevron aria-label="right arrow" className="ml" size="2.6rem"/></Link>
        </div>
        <img className="hero-image" src={heroImage} alt="Illustration of a software developer in front of a sophisticated computer, getting ready to work."/>
      </div>
    </HeroStyles>
  )
}

const HeroStyles = styled.section`
  margin-top: 3.7rem;

  h3 {
    margin-top: 2.6rem;
  }

  .btnWrap {
    margin-top: 3.2rem;

    .ml {
      margin-left: 0.5rem;
    }
  }

  .hero-image {
    margin-top: 4.4rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    height: 150px;
  }

  @media (min-width: 375px) {
    margin-top: 8rem;

    h1 {
      
    }

    h3 {
      margin-top: 3rem;
    }

    .btnWrap {
      margin-bottom: 5rem;
    }
  }
`