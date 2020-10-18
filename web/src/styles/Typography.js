import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: var(--sans-font);
    background-color: var(--dark);
    letter-spacing: 1.25px;
    font-size: 62.5%;
  }
  body {
    font-size: 1.44rem;
    color: var(--color-light);
    line-height: 1.6;
    font-family: 'Ubuntu', sans-serif;
  }
  h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
    font-weight: normal;
    font-family: 'Roboto Slab', serif;
    line-height: 1.55;
    text-align: center;
    text-transform: capitalize;
    color: var(--color-light);
    margin: 0;
    padding: 0;
  }
  h1,
  .h1 {
    font-size: 2.7rem;
    line-height: 1.5;
  }
  h2,
  .h2 {
    font-size: 2.188rem;
  }
  h3,
  .h3 {
    font-size: 1.75rem;
  }
  h4,
  .h4 {
    font-size: 1.4rem;
  }
  h5,
  .h5 {

  }
  h6,
  .h6 {

  }
  p{
    margin: 0;
    padding: 0;
  }
`;

export default Typography;