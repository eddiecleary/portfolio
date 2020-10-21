import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiChevronRight as Chevron } from 'react-icons/fi';
import heroImage from '../../assets/images/hero.svg';
import heroImage2 from '../../assets/images/hero2.svg';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <h1>
          eddie cleary is a <br className="tab" /> front-End developer
        </h1>
        <h3 className="h3 light">looking for remote opportunities</h3>
        <div className="btnWrap">
          <Link className="btn filled" to="#contact">
            Hire me
          </Link>
          <Link className="btn" to="#portfolio">
            Learn more
            <Chevron aria-label="right arrow" className="ml" size="26px" />
          </Link>
        </div>
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage2} />
          <img
            className="hero-image"
            src={heroImage}
            alt="Illustration of a software developer in front of a sophisticated computer, getting ready to work."
          />
        </picture>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  margin-top: 4.7rem;

  h3 {
    margin-top: 2.3rem;
  }

  .btnWrap {
    margin-top: 4.5rem;

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

    .hero-image {
      height: 177px;
      margin-top: 6.5rem;
    }

    .btnWrap {
      margin-top: 5rem;
    }
  }

  @media (min-width: 480px) {
    .hero-image {
      height: 220px;
    }
  }

  @media (min-width: 768px) {
    .hero-image {
      height: 330px;
    }

    .btnWrap {
      margin-top: 7rem;
    }
  }

  @media (min-width: 992px) {
    margin-top: 13rem;

    h3 {
      margin-top: 4.5rem;
    }

    .hero-image {
      height: 370px;
    }
  }

  @media (min-width: 1200px) {
    margin-top: 13rem;

    h3 {
      margin-top: 4.5rem;
    }

    .hero-image {
      margin-top: 8rem;
    }
  }
`;
