import { createGlobalStyle, keyframes } from 'styled-components';

const fadeIn = keyframes`
from{opacity: 0}
  to {opacity: 1}
`;

export const GlobalStyle = createGlobalStyle`
// css reset
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans TC', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  // 共用變數
  :root {
    --yellow-1: #FFEAAA;
    --blue-1: #A5DEE4;
    --blue-2: #7DB9DE;
    --gray-1: #BDC0BA;
  }

  .fulfilled {
    animation: ${fadeIn} 0.5s linear;
  }
`;
