import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-body: 'Ubuntu', sans-serif;
    --font-heading: 'Roboto Slab', serif;

    --color-dark: #2D3033;
    --color-light: #cccccc;
    --color-accent: #18A0FB;

    --section-divider: 15rem;

    @custom-media --media-480 (min-width: 480px);
    @custom-media --media-768 (max-width: 768px);
    @custom-media --media-992 (min-width: 992px);
    @custom-media --media-1200 (min-width: 1200px);
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
  }
  a {
    color: var(--color-light);
    text-decoration: none;
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
    }

    &.filled {
      border-color: var(--color-accent);
      background-color: var(--color-accent);
      color: var(--color-dark);
      padding: 7px 22px;
    }
  }
  .btnWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .btn:first-of-type {
      margin-right: 3.2rem;
    }
  }
`

export default GlobalStyles;