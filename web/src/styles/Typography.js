import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: var(--sans-font);
    background-color: var(--dark);
    font-size: 62.5%;
  }
  body {
    font-size: 1.44rem;
    color: var(--color-light);
    line-height: 1.6;
    font-family: 'Ubuntu', sans-serif;

    @media(min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.75;
    }

    @media(min-width: 992px) {
      font-size: 1.9rem;
      line-height: 1.75;
    }
  }
  h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    line-height: 1.5;
    text-align: center;
    text-transform: capitalize;
    color: var(--color-light);
    margin: 0;
    padding: 0;

    @media(min-width: 768px) {
      line-height: 1.45;
    }
  }
  h1,
  .h1 {
    font-size: 2.7rem;
    line-height: 1.5;

    @media(min-width: 768px) {
      font-size: 4.394rem;
    }
  }
  h2,
  .h2 {
    font-size: 2.188rem;

    @media(min-width: 768px) {
      font-size: 3.515rem;
    }
  }
  h3,
  .h3 {
    font-size: 1.75rem;

    @media(min-width: 768px) {
     font-size: 2.812rem;
    }
  }
  h4,
  .h4 {
    font-size: 1.4rem;

    @media(min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  h5,
  .h5 {
    @media(min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  h6,
  .h6 {
    @media(min-width: 768px) {
      font-size: 1.44rem;
    }
  }
  .light {
    font-weight: 300;
  }
  p{
    margin: 0;
    padding: 0;
  }
`;

export default Typography;
