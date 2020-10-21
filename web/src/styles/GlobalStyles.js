import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-body: 'Ubuntu', sans-serif;
    --font-heading: 'Roboto Slab', serif;

    --color-dark: #2D3033;
    --color-light: #cccccc;
    --color-accent: #18A0FB;

    --section-divider: 15rem;
    --text-width: 33rem;

    @media (min-width: 768px) {
      --text-width: 48rem;
      --section-divider: 18rem;
    }

    @media (min-width: 992px) {
      --text-width: 53.5rem;
      --section-divider: 22rem;
    }
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    position: relative;
    background-color: var(--color-dark);
    padding: 2rem 0;
    margin: 0;
  }
  /* Scrollbar */
  body::-webkit-scrollbar{
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: pink;
  }
  body::-webkit-scrollbar-track {
    background: purple;
  }
  body::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 6px;
    border: 3px solid white;
  }
  img {
    max-width: 100%;
  }
  .container {
    padding: 0 1.5rem;

    @media (min-width: 480px) {
      padding: 0 3rem;
    }

    @media (min-width: 768px) {
      padding: 0 5.4rem;
    }

    @media (min-width: 1200px) {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  a {
    color: var(--color-light);
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .btn {
    border: 2px solid transparent;
    border-radius: 1rem;
    color: var(--color-accent);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: max-content;

    &.outline {
      border-color: var(--color-accent);
      padding: 7px 22px;

      @media (min-width: 768px) {
        padding: 12px 30px;
      }
    }

    &.filled {
      border-color: var(--color-accent);
      background-color: var(--color-accent);
      color: var(--color-dark);
      padding: 7px 22px;

      &:hover {
        transform: scale(1.03);
      }

      @media (min-width: 768px) {
        padding: 12px 30px;
      }
    }
  }
  .btnWrap {
    display: flex;
    justify-content: center;
    align-items: center;

    .btn:first-of-type {
      margin-right: 2.5rem;
    }
  }
  .mobile {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .tab {
    @media (min-width: 768px) {
      display: block;
    }
    @media (min-width: 992px) {
      display: none;
    }
  }
  .desktop {
    @media (min-width: 992px) {
      display: block;
    }
    @media (min-width: 1200px) {
      display: none;
    }
  }
  .wide {
    @media (min-width: 1200px) {
      display: block;
    }
  }
`;

export default GlobalStyles;
