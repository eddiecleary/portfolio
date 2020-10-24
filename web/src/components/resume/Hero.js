import React from 'react';
import styled from 'styled-components';
import SvgResume from '../SvgResume';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <h1>Resumé</h1>
        <div className="flexWrap">
          <div className="textWrap">
            <h2>Eddie Cleary</h2>
            <h3 className="light">Front-End Web Developer</h3>
          </div>
          <SvgResume />
        </div>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  position: relative;

  h1 {
    padding-top: 27rem;
  }

  h3 {
    margin-top: 1rem;
  }

  .textWrap {
    margin-top: 5rem;
    text-align: left;

    > * {
      display: block;
      text-align: left;
    }
  }

  .resume {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 0;
  }

  @media (min-width: 480px) {
    h1 {
      padding-top: 33rem;
    }
  }

  @media (min-width: 768px) {
    .resume {
      position: static;
      width: clamp(25rem, 35vw, 35rem);
      margin-right: 0;
    }

    .flexWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5rem;
    }

    h1 {
      padding-top: 8rem;
    }
  }

  @media (min-width: 992px) {
    h1 {
      padding-top: 12rem;
    }

    .resume {
      width: clamp(35rem, 40vw, 60rem);
    }
  }
`;
