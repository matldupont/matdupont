import { createGlobalStyle } from 'styled-components'

export const color = {
  white: {
    main: '#fff',
    alt: '#f7f7f7',
  },
  black: {
    main: '#000',
    alt: '#212121',
  }
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background: ${color.black.alt};
    font-family: 'Raleway', sans-serif;
    color: ${color.white.alt};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    font-family: 'Monserrat', sans-serif;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
`;
